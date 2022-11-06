import React from "react";
import { Message } from "../../models/message";
import MessageCard from "../MessageCard";

async function getMessages(username: string) {
  const response = await fetch(
    `https://fanatgchannelscraper.herokuapp.com/api/v2/get_post/${username}`
  );

  const messages = await response.json();
  return messages;
}

async function MessagesPage({ params }: { params: { username: string } }) {
  const messages: Message[] = await getMessages(params.username);
  return (
    <div className="flex items-center justify-center">
      <div className="relative md:max-w-4xl">
        {messages.map((message: Message, index) => (
          <MessageCard key={message.id} message={message.text} />
        ))}
      </div>
    </div>
  );
}

export default MessagesPage;
