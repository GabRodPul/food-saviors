import { z } from "zod";
import { zfd } from "zod-form-data";

export const FileSrcSchema = z.object({
  src: z.string().url()
});

export type FileSrc = z.infer<typeof FileSrcSchema>;

export const ImageFileSchema = zfd.formData({
  image: zfd.file()
});

export type ImageFile = z.infer<typeof ImageFileSchema>;
