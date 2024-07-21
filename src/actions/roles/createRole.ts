"use server"

import { auth } from "@/auth.config";
import { createRoleSchemaType } from "@/features/roles/schema";
import prisma from "@/lib/prisma";

export async function createRole(role: createRoleSchemaType) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  try {
    
    const newRole = await prisma.role.create({
      data: {
        name: role.name,
        description: role.description
      }
    })

    return newRole

  } catch (error) {

    throw Error("Oops hubo un error en la consulta")
  }


}