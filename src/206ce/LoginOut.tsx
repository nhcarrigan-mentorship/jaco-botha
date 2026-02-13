"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";


export default function LoginOut({itemClassName=""}) {
  const { user, isLoading } = useUser();
  return (
    <div>
      <div>
        {!user && !isLoading && (
          <Link
            className={itemClassName}
            href="/auth/login"
          >
            Login
          </Link>
        )}
        {isLoading && <div>Loading...</div>}
        {user && (
          <div className="flex text-sm gap-2">
            <DropdownMenu >
              <DropdownMenuTrigger className={itemClassName}>
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    className={itemClassName}
                    href="/dashboard"
                  >
                    Dash
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className={itemClassName}
                    href="/auth/logout"
                  >
                    Log Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
