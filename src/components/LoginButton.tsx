
"use client";

import Link from "next/link";

export default function LoginButton() {
    return(
        <Link className="btn" href="/auth/login">Log In</Link>
    )
}