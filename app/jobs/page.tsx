import React from "react";
import { Channel } from "../../models/channel";
import ChannelCard from "./../ChannelCard";

const getChannels = async () => {
  const usernames = [
    "iscore_jobs",
    "freelance_ethio",
    "hahujobs",
    "ethiojobsofficial",
  ];

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

async function Page() {
  const channels: Channel[] = await getChannels();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 space-x-2">
      {channels.map((channel: Channel) => (
        <ChannelCard
          title={channel.title}
          about={channel.about}
          totalMember={channel.totalMember}
          username={channel.username}
        />
      ))}
    </div>
  );
}

export default Page;
