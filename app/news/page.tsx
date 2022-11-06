import React from "react";
import { Message } from "../../models/message";
import MessageCard from "../MessageCard";

const getNews = async () => {
  const response = await fetch(
    `https://fanatgchannelscraper.herokuapp.com/api/v2/getmultiplechannels_post?channels=ethio_mereja_news&channels=tikvahethiopia
  `,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return data;
};

async function NewsPage() {
  let news = await getNews();
  news = [...news[0], ...news[1]];
  console.log(news[0]);
  return (
    <div>
      <div className="grid md:grid-cols-2 md:m-10 grid-cols-1 space-x-5">
        {news.map((news: any, index: number) => (
          <MessageCard
            key={news.id}
            message={news.text}
            img={news.img}
            showImage={true}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
