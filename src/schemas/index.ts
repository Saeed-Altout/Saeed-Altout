import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
  code: z.string().optional(),
});

export const RegisterSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const VerifyAccountSchema = z.object({
  token: z.string(),
});

export const CreateProjectSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export const UpdateProjectSchema = z.object({
  name: z.string(),
  description: z.string(),
});
