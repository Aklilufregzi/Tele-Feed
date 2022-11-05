"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <Image
            height={500}
            width={500}
            alt="theo is responsible for the limits"
            src="/error.svg"
          ></Image>
          <br />
        </div>
      </div>
      <div>
        <h3 className="text-center text-4xl font-bold">
          Theo Limited my requests!
        </h3>
      </div>
    </>
  );
}
