import z from "zod";

export const loginUserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  image: z.string(),
  accessToken: z.string(),
});

export type LoginUser = z.infer<typeof loginUserSchema>;
