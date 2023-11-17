import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsersService = async () => {
  return await prisma.user.findMany(); 
}

export const createUserService = async (data) => {
  return await prisma.user.create({ data });
}