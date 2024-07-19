"use server"

import { auth } from "@/auth.config";
import { IPagination } from "@/interfaces";
import prisma from "@/lib/prisma";


interface IArgs {
  pagination: IPagination
}

export async function getAllUsers({ pagination }: IArgs) {
  const session = await auth();

  if (!session) throw new Error('Acceso no autorizado');

  // const offset = (page - 1) * limit;
  const { take, skip } = pagination
  const [users, totalUsers] = await Promise.all([
    prisma.user.findMany({
      skip,
      take,
    }),
    prisma.user.count(),
  ]);

  const totalPages = Math.ceil(totalUsers / take);
  const currentPage = Math.floor(skip / take) + 1;

  return {
    users,
    totalUsers,
    totalPages,
    currentPage
  };
}