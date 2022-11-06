import { notFound } from "next/navigation";
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
        `https://fanatgchannelscraper.herokuapp.com/api/v2/get_info/${username}`
      );

      if (response.status === 200) {
        return await response.json();
      }

      if ([503, 500].includes(response.status)) {
        return notFound();
      }
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
          totalMember={channel.subscriers}
          username={channel.username}
          profile={channel.profile}
        />
      ))}
    </div>
  );
}

export default Page;
