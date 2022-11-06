import { notFound } from "next/navigation";
import React from "react";
import ItemCard from "../ItemCard";

const getMarket = async () => {
  const lastPost = await fetch(
    "https://fanatgchannelscraper.herokuapp.com/api/v2/getlastpost_id/ethio_market_place",
    {
      cache: "no-cache",
    }
  );

  const lastPostId = await lastPost.json();

  const id = await lastPostId.last_post_id;

  const response = await fetch(
    "https://fanatgchannelscraper.herokuapp.com/api/v2/channel_value/ethio_market_place?after=" +
      (id - 40)
  );

  if (response.status === 200) {
    return await response.json();
  }

  if ([503, 500].includes(response.status)) {
    return notFound();
  }
};

async function Shopping() {
  const market = await getMarket();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:m-10 xs:m-2">
      {market.map((item: any) => (
        <ItemCard
          text={item.description}
          key={item.scriped_id}
          image={item.img}
          price={item.price || "N/A"}
          id={item.scriped_id.toString()}
        />
      ))}
    </div>
  );
}

export default Shopping;
