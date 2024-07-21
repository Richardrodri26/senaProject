"use server"

import { auth } from "@/auth.config";
import { IPagination } from "@/interfaces";
import prisma from "@/lib/prisma";


interface IArgs {
  pagination: IPagination
}

export async function getAllRoles({ pagination }: IArgs) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  // const offset = (page - 1) * limit;
  const { take, skip } = pagination
  const [roles, totalRoles] = await Promise.all([
    prisma.role.findMany({
      skip,
      take,
    }),
    prisma.role.count(),
  ]);

  const totalPages = Math.ceil(totalRoles / take);
  const currentPage = Math.floor(skip / take) + 1;

  return {
    roles,
    totalRoles,
    totalPages,
    currentPage
  };
}