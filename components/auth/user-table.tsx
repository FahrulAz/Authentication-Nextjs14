import { getUser } from "@/lib/data";

const UserTable = async () => {
  const users = await getUser();
  if (!users?.length) return <h1 className="text-2xl">No User Found</h1>;

  return (
    <table className="w-full bg-white mt-3 ">
      <thead className="border-b border-gray-100">
        <tr className="capitalize">
          <th className="py-3 px-6 text-sm text-left">name</th>
          <th className="py-3 px-6 text-sm text-left">email</th>
          <th className="py-3 px-6 text-sm text-left">role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b border-gray-100">
            <td className="px-6 py-3">{user.name}</td>
            <td className="px-6 py-3">{user.email}</td>
            <td className="px-6 py-3">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
