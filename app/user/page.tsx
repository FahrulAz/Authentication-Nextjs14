import UserTable from "@/components/auth/user-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User List",
  description: "User List",
};

const UserPage = () => {
  return (
    <div>
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
          <h1 className="text-2xl font-bold">User List</h1>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
