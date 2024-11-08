import { IoLogoGoogle } from "react-icons/io5";
import { signIn } from "@/auth";

export const GoogleBtn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-white font-medium text-sm bg-blue-500 w-full"
      >
        <IoLogoGoogle />
        Sign In With Google
      </button>
    </form>
  );
};
