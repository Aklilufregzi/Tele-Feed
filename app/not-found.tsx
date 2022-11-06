"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Twisters() {
  const twisters = [
    "If mister and missis are opposites, then why isn't missus and mister?",
    "If you're a vegetarian and you eat animal crackers, are you cheating?",
    "If some stars are light years away why can't we go there in the dark easily ",
  ];

  // get a random number in range from 0 to twisters length -1
  const [rand, update] = useState(
    Math.floor(Math.random() * (twisters.length - 1 - 0 + 1)) + 0
  );

  return (
    <div>
      <h3 className="text-center text-4xl font-bold">
        <h1>Try saying this till we get back, </h1> <br />
        {/* add a toungue twister   */}
        <h3 className="text-center text-4xl font-bold">{twisters[rand]}</h3>
      </h3>

      <div className="flex justify-center">
        <button
          className="btn m-4"
          onClick={() => {
            update(
              Math.floor(Math.random() * (twisters.length - 1 - 0 + 1)) + 0
            );
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

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
      <div className="flex items-center justify-center mt-10">
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
        <Twisters />
      </div>
    </>
  );
}
