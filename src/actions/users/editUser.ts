"use server"

import { auth } from "@/auth.config";
import { editUserSchemaType } from "@/features/users/schemas";
import prisma from "@/lib/prisma";

export async function editUser(user: editUserSchemaType) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  try {
    
    const newUser = await prisma.user.update({
      where: {
          id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
      select: {
        id: true,
        name: true
      }
    })

    return newUser

  } catch (error) {
    throw Error("Oops hubo un error en la consulta")
  }


}