import path from "path";
import { existsSync, mkdirSync, createWriteStream } from "fs";
import { Readable } from "stream";
import type { TRPCContext } from "@food-saviors/types/helpers/trpc";
import type { Prisma } from "@prisma/client";
import { r } from "@food-saviors/types/helpers/result";
import { TRPCError } from "@trpc/server";
import type { FileSrc as Src } from "@food-saviors/types/data/image-file";
import type { Return } from "@prisma/client/runtime/client";

export namespace f {
  class Static {
    static readonly commonImgFileExt = [
      // A/PNG
      ".apng",
      ".png",

      // AVIF
      ".avif",

      // GIF
      ".gif",

      // JPEG
      ".jpg",
      ".jpeg",
      "jfif",
      ".pjpeg",
      ".pjp",

      // SVG
      ".svg",

      // WEBP
      ".webp",
    ]
  }

  const verifyFileExt = (file: File, ext: string): boolean =>
    file.name.lastIndexOf(ext) === file.name.length - ext.length;

  export const verifyFileExtMany = (file: File, ext: string[]): boolean => {
    for (const e of ext) {
      if (verifyFileExt(file, e))
        return true;
    }

    return false;
  }

  export type UploadArgs = {
    name: string,
    file: File,
    prisma?: {
      ctx: TRPCContext,
      beforeUpload: Prisma.PrismaPromise<any>[]
    }
  };

  export type UploadResult = r.Result<{ txn: any[], img: Src }, TRPCError>;
  export const uploadFile = async (args: UploadArgs)
    : Promise<UploadResult> => {
    const {
      name,
      file,
      prisma
    } = args;
    try {
      let txn: any[] = [];
      if (!!prisma) {
        const { ctx, beforeUpload } = prisma;
        txn = await ctx.db.$transaction(beforeUpload)
      }

      const img = await writeFile(name, file);

      return r.ok({ txn, img });
    } catch (err: any) {
      return r.err(err);
    }
  }

  export const uploadImage = async (args: UploadArgs)
    : Promise<UploadResult> => {
    if (!verifyFileExtMany(args.file, Static.commonImgFileExt))
      return r.err({
        name: "TRPCError",
        code: "BAD_REQUEST",
        message: "Invalid image file"
      });

    return uploadFile(args);
  }

  export const writeFile = async (name: string, file: File) => {
    const now = Date.now();
    const fdir = "public/uploads";
    const rdir = path.resolve(`${__dirname}/../../${fdir}/`);

    if (!existsSync(rdir)) {
      mkdirSync(rdir, { recursive: true });
    }
    const fexts = file.name.substring(file.name.lastIndexOf("."), file.name.length) || "";
    const fname = `${now}_${name}.${fexts}`;

    console.log('[utils/files.ts:writeFile] - Writing', file.name, 'to', fname);
    const fd = createWriteStream(path.resolve(`${rdir}/${fname}`));
    const fileStream = Readable.fromWeb(
      file.stream() as any
    );

    for await (const chunk of fileStream)
      fd.write(chunk);
    fd.end();

    return {
      src: `${fdir}/${fname}`,
    };
  }
}
