'use client'
import { ChatContext } from "@/lib/chatContext"
import { useContext, useEffect, useRef } from "react"
import Message from "./message";
import classes from './styles.module.css'

export default function Chat() {
    const chatRef = useRef<any>(null)
    
    const {
        history,
        isTyping
    } = useContext(ChatContext);
    
    useEffect(() => {
        if (chatRef?.current) {
            const chat = chatRef.current;
            const newHeight = chat.scrollHeight;

            chat.scroll({
                top: newHeight,
                left: 0,
                behavior: "smooth",
            })
        } 
    }, [history])
    
    return (
        <section id="chat" ref={chatRef} className="h-full contain-strict overflow-auto px-2 mb-[2px]">
            <ul>
                {history.map((item: HistoryItem, index: number) => (
                    <li key={index} className="mb-4">
                        <Message item={item} />
                    </li>
                ))}
                {isTyping ? <li className={`${classes.typing} m-0 mb-4 w-fit`}><p></p></li> : null}
            </ul>
        </section>
    )
}
