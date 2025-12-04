import z from "zod";

export const addEditProductPayloadSchema = z.object({
  title: z.string(),
  brand: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  stock: z.number(),
  category: z.string(),
  thumbnail: z.string(),
});

export type AddEditProductPayload = z.infer<typeof addEditProductPayloadSchema>;
