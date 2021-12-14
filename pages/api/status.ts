import { status } from "minecraft-server-util";

const servers = [
  {
    url: "192.168.1.228",
    port: 25568,
  },
  {
    url: "192.168.1.228",
    port: 25566,
  },
  {
    url: "192.168.1.228",
    port: 25565,
  },
  {
    url: "192.168.1.228",
    port: 25567,
  },
  {
    url: "192.168.1.228",
    port: 25569,
  },
  {
    url: "localhost",
    port: 25565,
  },
];

export default async function handler(req, res) {
  const data = await Promise.all(
    servers.map(async (server) => {
      try {
        console.log("Queried server on port:", server.port);
        const serverResponse = await status(server.url, server.port);
        return { serverResponse, url: server.url, port: server.port };
      } catch (error) {
        console.error(error);
      }
    })
  );
  // console.log("Data", data);

  res.status(200).json(data);
}