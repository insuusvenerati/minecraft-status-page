import Progress from "@material-tailwind/react/Progress";

export type ServerProps = {
  serverName: string;
  users: [{ id: string; name: string }];
  message: string;
  url: string;
  port: number;
};

export function Server({serverName, users, message, url, port}: ServerProps) {
  return (
    <tr>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {serverName}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <i className="fas fa-circle fa-sm text-green-500 mr-2"/> Online
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <div className="flex">
          {users?.map((user) => (
            <div
              key={user.id}
              className="w-10 h-10 rounded-full border-2 border-white"
            >
              {user.name}
            </div>
          ))}
        </div>
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {message}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {url}:{port}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <Progress color="red" value="60"/>
      </th>
    </tr>
  );
}
