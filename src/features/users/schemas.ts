import { Role } from "@prisma/client";
import { z } from "zod";


export const createUserSchema = z.object({
  name: z.string({ required_error: 'El campo Nombre es requerido' }),
  email: z.string({ required_error: 'El campo Email es requerido' }).email('Email no valido'),
  isActive: z.boolean({ required_error: 'El campo usuario activo es necesario' }),
  role: z.enum([Role.admin, Role.user], {
    required_error: 'El rol es requerido',
    invalid_type_error: 'El rol debe ser un valor válido',
  }),
})

export type createUserSchemaType = z.infer<typeof createUserSchema>


export const editUserSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: 'El campo Nombre es requerido' }),
  email: z.string({ required_error: 'El campo Email es requerido' }).email('Email no valido'),
  isActive: z.boolean({ required_error: 'El campo usuario activo es necesario' }),
  role: z.enum([Role.admin, Role.user], {
    required_error: 'El rol es requerido',
    invalid_type_error: 'El rol debe ser un valor válido',
  }),
})

export type editUserSchemaType = z.infer<typeof editUserSchema>