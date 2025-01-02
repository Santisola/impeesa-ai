'use client'
import { ChatContext } from "@/lib/chatContext"
import { useContext } from "react"
import Message from "./message";

export default function Chat() {
    const {
        history
    } = useContext(ChatContext);

    return (
        <section id="chat" className="h-full contain-strict overflow-auto px-2">
            <ul>
                {history.map((item: HistoryItem, index: number) => (
                    <li key={index} className="mb-4">
                        <Message item={item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
