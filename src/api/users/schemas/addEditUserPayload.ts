import z from "zod";

export const addEditUserPayloadSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
});

export type AddEditUserPayload = z.infer<typeof addEditUserPayloadSchema>;
