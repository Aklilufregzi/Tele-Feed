import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { Channel } from "../models/channel";

const removeFirstchar = (str: string) => {
  return str.substring(1);
};

function ChannelCard({ title, totalMember, username, profile }: any) {
  return (
    <Link
      href={username || ""}
      className="relative mb-2 block overflow-hidden rounded-lg border border-gray-100 p-8 hover:shadow-slate-300 hover:border-gray-200 hover:shadow-lg"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        <div className="ml-3 hidden flex-shrink-0 sm:block">
          <Image
            width={40}
            height={40}
            alt="Paul Clapton"
            src={profile || "/broadcast.svg"}
            className="h-12 w-12 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <dl className="mt-6 flex">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Subscribers</dt>
          <dd className="text-xs text-gray-500">{totalMember}</dd>
        </div>

        <div className="ml-3 flex flex-col-reverse sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div>
      </dl>
    </Link>
  );
}

export default ChannelCard;
