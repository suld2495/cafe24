import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function hanle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
}