import path from "path";
import { existsSync, mkdirSync, createWriteStream } from "fs";
import { Readable } from "stream";
import type { TRPCContext } from "@food-saviors/types/helpers/trpc";
import type { Prisma } from "@prisma/client";
import { r } from "@food-saviors/types/helpers/result";

export namespace f {
  export const uploadFile = async (args: { ctx: TRPCContext, name: string, file: File, beforeUpload: Prisma.PrismaPromise<any>[] }) => {
    const { ctx, name, file, beforeUpload } = args;
    try {
      const txn = await ctx.db.$transaction(beforeUpload);
      const img = await writeFile(name, file);

      return r.ok({ txn, img });
    } catch (err: any) {
      return r.err(err);
    }
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
