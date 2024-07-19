import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El campo email es requerido",
    })
    .email({
      message: "Valor no valido",
    }),

  password: z.string({
    required_error: "El campo password es requerido",
  }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: "El nombre es requerido",
      })
      .min(1, "El nombre es requerido"),
    email: z
      .string({
        required_error: "Email es requerido",
      })
      .email("Email inválido"),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(
        6,
        "La confirmación de la contraseña debe tener al menos 6 caracteres"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type registerSchemaType = z.infer<typeof registerSchema>;
