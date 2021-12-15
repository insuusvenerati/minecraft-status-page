import { prisma } from "../../prisma";

export default async function getAllServers(req, res) {
  const servers = await prisma.server.findMany();
  console.log("Servers", servers);

  res.status(200).json(servers);
}
