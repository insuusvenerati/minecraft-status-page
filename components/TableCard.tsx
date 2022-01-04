import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Server } from "./Server";
import { fetcher } from "../util/fetcher";
import { toast } from "react-toastify";
import useSWR from "swr";

export type Status = {
  url: string;
  port: number;
  serverResponse: {
    version: { name: string; protocol: number };
    players: {
      online: number;
      max: number;
      sample: [{ id: string; name: string }];
    };
    motd: {
      raw: string;
      clean: string;
      html: string;
    };
    favicon: string;
    srvRecord: null;
  };
};

export function TableCard() {
  const { data, error } = useSWR<Status[]>("/api/status", fetcher, {
    refreshInterval: () => {
      if (error) return 30 * 1000;
      return 10 * 1000;
    },
  });

  if (error) {
    toast.error(error.message, { position: "bottom-right", toastId: "error" });
  } else {
    toast("Successfully fetched servers!", {
      position: "bottom-right",
      toastId: "success",
    });
  }

  if (process.env.NODE_ENV === "development" && data) {
    console.log("Data", data);
    console.log(error);
  }

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Minecraft Server Status</h2>
        {error?.message}
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Server
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Users
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  MOTD
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  URL:PORT
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  CPU
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((server) => {
                if (!server) return null;
                return (
                  <Server
                    key={server?.serverResponse.version.name}
                    serverName={server?.serverResponse.version.name}
                    users={server?.serverResponse.players.sample}
                    message={server?.serverResponse.motd.clean}
                    url={server?.url}
                    port={server?.port}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
