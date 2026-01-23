"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function LoginOut() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <div>
        {!user && !isLoading && (
          <Link
            className="btn"
            href="/auth/login"
          >
            Login
          </Link>
        )}
        {isLoading && (
            <div>Loading...</div>
        )}
        {user && (
            <div className="flex flex-row text-sm gap-4">
            <Link className="btn" href="/dashboard">{user.picture}</Link>
            <Link className="btn" href="/auth/logout">Log Out</Link>
            </div>
        )}
      </div>
    </div>
  );
}
