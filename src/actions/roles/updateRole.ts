"use server"

import { auth } from "@/auth.config";
import { updateRoleSchemaType } from "@/features/roles";
import { editUserSchemaType } from "@/features/users/schemas";
import prisma from "@/lib/prisma";

export async function editRole(role: updateRoleSchemaType) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  try {
    
    const newRole = await prisma.role.update({
      where: {
          id: role.id,
      },
      data: {
        name: role.name,
        description: role.description,
      },
      select: {
        id: true,
        name: true
      }
    })

    return newRole

  } catch (error) {
    throw Error("Oops hubo un error en la consulta")
  }


}