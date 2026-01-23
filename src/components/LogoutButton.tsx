"use client";

import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link
      className="btn"
      href="/auth/logout"
    >
      Log Out
    </Link>
  );
}
