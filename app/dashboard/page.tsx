import { auth } from "@/../../auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <h1 className="text-2xl">Dashboard</h1>
      <h2 className="text-xl">
        Welcome back: <span className="font-bold">{session?.user?.name}</span>
      </h2>
    </div>
  );
}
