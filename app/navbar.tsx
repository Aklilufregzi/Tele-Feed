"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";

const ActiveLink = ({ href, name }: any) => {
  const pathname = usePathname();

  const isCurrentPath = (path: string) => pathname.includes(path);

  return (
    <Link
      style={{
        color: isCurrentPath(href) ? "red" : "white",
      }}
      href={href}
    >
      {name}
    </Link>
  );
};

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink name={"Jobs"} href="/jobs">
                Jobs
              </ActiveLink>
            </li>

            <li>
              <ActiveLink name={"News"} href="/news">
                News
              </ActiveLink>
            </li>
          </ul>
        </div>
        <ActiveLink
          href="/"
          name={"Tele Feed"}
          className="btn btn-ghost normal-case text-xl"
        ></ActiveLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="border-md border-slate-200 menu menu-horizontal p-0">
          <li>
            <ActiveLink name={"Jobs"} href="/jobs">
              Jobs
            </ActiveLink>
          </li>

          <li>
            <ActiveLink name={"News"} href="/news">
              News
            </ActiveLink>
          </li>

          <li>
            <ActiveLink name={"Shopping"} href="/shopping">
              Shopping
            </ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="hover:border-b-red-300 hover-bordered "
          href="https://github.com/Aklilufregzi/Tele-Feed"
        >
          <Image src="/git.svg" alt="" height={30} width={30} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
