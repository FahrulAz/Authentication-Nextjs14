import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/logo-f.svg"
            alt="logo-image"
            height={12}
            width={24}
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-600">
            <li>
              <Link
                className="hover:text-white p-2 rounded-lg transition duration-300 hover:bg-black "
                href="/"
              >
                Home
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link
                    className="hover:text-white p-2 rounded-lg transition duration-300 hover:bg-black "
                    href="/product"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white p-2 rounded-lg transition duration-300 hover:bg-black "
                    href="/dashboard"
                  >
                    Dahsboard
                  </Link>
                </li>
                {session.user.role === "admin" ? (
                  <li>
                    <Link
                      className="hover:text-white p-2 rounded-lg transition duration-300 hover:bg-black "
                      href="/user"
                    >
                      Users
                    </Link>
                  </li>
                ) : null}
              </>
            )}
          </ul>
          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-500 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full"
              >
                <Image
                  src={session.user.image || "/avatar.svg"}
                  alt="user-avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-400 text-white px-4  py-2 rounded-md hover:bg-red-500"
              >
                Sign Out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-red-400 text-white px-4  py-2 rounded-md hover:bg-red-500"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
