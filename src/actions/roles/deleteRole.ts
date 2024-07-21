"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const deleteRoleById = async (id: string) => {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');
  
  try {
    // Elimina las relaciones de UserRole antes de eliminar el rol
    await prisma.userRole.deleteMany({
      where: {
        roleId: id,
      },
    });

    // Elimina el rol
    const resService = await prisma.role.delete({
      where: {
        id,
      },
    });


    if (!resService) throw Error("No se encontro el rol para eliminar");

    return resService;
  } catch (error) {
    console.error("error", error);
  }
};
