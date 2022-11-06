import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getPost = async (id: string | number) => {
  const response = await fetch(
    "https://fanatgchannelscraper.herokuapp.com/api/v2/getpostby_id/ethio_market_place/" +
      id
  );
  if (response.status === 200) {
    return await response.json();
  }
  if ([503, 500, 404].includes(response.status)) {
    return notFound();
  }
};

async function page({ params }: { params: { id: string } }) {
  const product = await getPost(params.id);
  return (
    <div className="md:m-20">
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">
              {product.text.substring(0, 50)}
            </h1>

            <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <Image
                  alt="Tee"
                  src={product.photo}
                  height={500}
                  width={500}
                  objectFit="contain"
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>

                  <span className="ml-1.5 text-xs"> Hover to zoom </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <p>{product.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
