import { notFound } from "next/navigation";
import React from "react";
import { Channel } from "../models/channel";
import ChannelCard from "./ChannelCard";

const getChannels = async (usernames: string[]) => {
  const channels = await Promise.all(
    usernames.map(async (username) => {
      const response = await fetch(
        `https://fanatgchannelscraper.herokuapp.com/api/v2/get_info/${username}`,
        {}
      );

      if (response.status === 200) {
        return await response.json();
      }

      if (response.status === 503) {
        return notFound();
      }
    })
  );

  return channels;
};

export default async function () {
  const usernames = [
    "tikvahethiopia",
    "freelance_ethio",
    "eventsethiopia",
    "ethiojobsofficial",
    "tikvahuniversity",
    "startupsi",
  ];
  const channels: Channel[] = await getChannels(usernames);

  return (
    <div className="grid md:grid-cols-2 md:m-10 grid-cols-1 space-x-2">
      {channels.map((channel: Channel, index) => (
        <ChannelCard
          title={channel.title}
          totalMember={channel.subscriers}
          username={channel.username}
          profile={channel.profile}
          key={index}
        />
      ))}
    </div>
  );
}
