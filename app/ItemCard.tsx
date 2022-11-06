import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({ text, image, price, id }: any) {
  return (
    <Link href={`/shopping/${id}`}>
      <div className="cursor-pointer card w-96 bg-base-100 shadow-xl flex items-center hover:scale-110 transition-transform duration-100">
        <figure>
          <Image
            src={image || ""}
            height="200"
            width="200"
            objectFit="cover"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary ">{price}</div>
          </h2>
          <p className="justify-around">{text.substring(0, 40)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
