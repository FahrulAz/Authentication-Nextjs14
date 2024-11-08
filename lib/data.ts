import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "admin")
    redirect("/dashboard");

  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByUser = async () => {
  const session = await auth();
  if (!session || !session.user) redirect("/dashboard");
  const role = session.user.role;

  if (role === "admin") {
    try {
      const product = await prisma.product.findMany({
        include: { user: { select: { name: true } } },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const product = await prisma.product.findMany({
        where: { userId: session.user.id },
        include: { user: { select: { name: true } } },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }
};
