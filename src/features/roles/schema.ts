import { z } from "zod";


export const createRoleSchema = z.object({
  name: z.string({ required_error: 'El campo Nombre es requerido' }),
  description: z.string({ required_error: 'El campo descripcion es requerido' })
})

export type createRoleSchemaType = z.infer<typeof createRoleSchema>