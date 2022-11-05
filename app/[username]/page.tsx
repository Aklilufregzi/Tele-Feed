import React from "react";
import { Message } from "../../models/message";
import MessageCard from "../MessageCard";

async function getMessages(username: string) {
  const response = await fetch(
    `https://fanaprotocol.herokuapp.com/api/v1/channel/get_message?username=@${username}`,
    {
      headers: {
        token: process.env.API_KEY || "",
      },
    }
  );

  const messages = await response.json();
  return messages;
}

async function MessagesPage({ params }: { params: { username: string } }) {
  const messages: Message[] = await getMessages(params.username);
  console.log(messages[0]);
  return (
    <div className="flex items-center justify-center">
      <div className="relative md:max-w-4xl">
        {messages.length > 0 ? (
          <div>
            {messages.map((message: Message, index) =>
              !message.media ? (
                <MessageCard
                  key={index}
                  message={message.message}
                  link={message.link}
                  views={message.views}
                />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MessagesPage;
