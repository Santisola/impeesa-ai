'use client'
import Chat from "@/components/chat/chat";
import NewMessage from "@/components/newMessage";
import { ChatProvider } from "@/lib/chatContext";

export default function Home() {
  return (
    <main className="w-full h-full max-w-5xl px-4 mx-auto flex flex-col">
      <ChatProvider>
        <Chat />
        <NewMessage />
      </ChatProvider>
    </main>
  );
}
