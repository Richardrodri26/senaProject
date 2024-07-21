import { z } from "zod";


export const createRoleSchema = z.object({
  name: z.string({ required_error: 'El campo Nombre es requerido' }),
  description: z.string({ required_error: 'El campo descripcion es requerido' })
})

export type createRoleSchemaType = z.infer<typeof createRoleSchema>


export const updateRoleSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: 'El campo Nombre es requerido' }),
  description: z.string({ required_error: 'El campo descripcion es requerido' })
})

export type updateRoleSchemaType = z.infer<typeof updateRoleSchema>