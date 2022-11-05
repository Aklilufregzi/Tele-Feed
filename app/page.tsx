import React from "react";
import { Channel } from "../models/channel";
import ChannelCard from "./ChannelCard";

const getChannels = async (usernames: string[]) => {
  const channels = await Promise.all(
    usernames.map(async (username) => {
      const response = await fetch(
        `https://fanaprotocol.herokuapp.com/api/v1/channel/get_info?username=@${username}`,
        {
          headers: {
            token: process.env.API_KEY || "",
          },
        }
      );

      const data = await response.json();

      return data;
    })
  );

  return channels;
};

export async function ChannelList() {
  const usernames = [
    "tikvahethiopia",
    "freelance_ethio",
    "eventsethiopia",
    "ethiojobsofficial",
    "tikvahuniversity",
    "startupsi",
  ];
  const channels: Channel[] = await getChannels(usernames);
  console.log(channels[0]);

  return (
    <div className="grid md:grid-cols-2 md:m-10 grid-cols-1 space-x-2">
      {channels.map((channel: Channel, index) => (
        <ChannelCard
          title={channel.title}
          about={channel.about}
          totalMember={channel.totalMember}
          username={channel.username}
          key={index}
        />
      ))}
    </div>
  );
}

export default ChannelList;
