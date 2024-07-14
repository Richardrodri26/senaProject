import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({
    required_error: "El campo email es requerido",
  }).email({
    message: "Valor no valido"
  }),

  password: z.string({
    required_error: "El campo password es requerido"
  })
  
});

export type loginSchemaType = z.infer<typeof loginSchema>;