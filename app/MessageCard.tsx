import React from "react";
import Image from "next/image";

function MessageCard({ message, views, img }: any) {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start p-6">
        <a href="#" className="block shrink-0">
          <Image
            alt="Speaker"
            src={img || "/broadcast.svg"}
            className="h-96 w-96 rounded-lg object-cover"
            height={340}
            width={340}
          />
        </a>

        <div className="ml-4">
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {message?.substring(0, 35)} ...
            </a>
          </h3>

          <p className="text-sm text-gray-700 line-clamp-2">
            {message.substring(0, 600)} ...
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>

          {views ? (
            <span className="text-[10px] font-medium sm:text-xs">
              {views} Views
            </span>
          ) : null}
        </strong>
      </div>
    </article>
  );
}

export default MessageCard;
