import { z } from "zod";
import { zfd } from "zod-form-data";

export const ImageSrcSchema = z.object({
  src: z.string().url()
});

export const ImageFileSchema = zfd.formData({
  image: zfd.file()
});

export type ImageFile = z.infer<typeof ImageFileSchema>;
