import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const server = await prisma.server.create({ data: body });

      return res.status(200).json(server);
    } catch (error) {
      res.status(500).json({ error: error.message, body: req.body });
    }
  } else if (!req.body) {
    res.status(400).json({ error: "No body" });
  }

  return res.end();
}
