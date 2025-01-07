"use server";

import { RequestDataType } from "@/components/pages/home/MainPage";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRequest = async (data: RequestDataType) => {
  try {
    const request = await prisma.user.create({
      data: {
        email: data.email,
      },
    });

    return request;
  } catch (error) {
    console.error("Error while saving request to database:", error);
    return {
      error: "An error occurred while sending the request.",
      status: 500,
    };
  }
};
