import { queryFull, queryBasic, status } from "minecraft-server-util";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
