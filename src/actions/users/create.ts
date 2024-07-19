"use server"

import { auth } from "@/auth.config";
import { createUserSchemaType } from "@/features/users/schemas";
import prisma from "@/lib/prisma";
import bcryptjs from 'bcryptjs';

export async function createUser(user: createUserSchemaType) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  try {
    
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        password: bcryptjs.hashSync( '123456' )
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