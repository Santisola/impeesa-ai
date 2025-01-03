/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useCallback, useEffect, useState, createContext, useMemo, FormEvent  } from "react";
const HISTORY_KEY = 'IMPEESA_HISTORY';

const inicialChat = window && window?.localStorage?.getItem(HISTORY_KEY) ? JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') : []

export const ChatContext = createContext<any | null>(null);

export const ChatProvider = ({ children }: any) => {
    const [history, setHistory] = useState<HistoryItem[]>([...inicialChat]);
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    useEffect(() => setHistory(JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')), []);

    useEffect(() => {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }, [history])
    
    const handleNewMessage = async (ev: FormEvent) => {
        ev.preventDefault();

        if (newMessage !== '') {
            setIsTyping(true);

            setHistory(prevState => ([
                ...prevState,
                {
                    role: 'user',
                    parts: [{text: newMessage}]
                }
            ]));

            try {
                setNewMessage('');
                const historyToSend = [...history];
                historyToSend.pop();

                const fetchRes = await fetch('/api/chat', {
                    method: 'POST',
                    body: JSON.stringify({
                        message: newMessage,
                        history: historyToSend
                    })
                });
    
                const res = await fetchRes.json();
    
                if(res?.data?.message) {
                    setHistory(prevState => ([
                        ...prevState,
                        {
                            role: 'model',
                            parts: [{text: res?.data?.message}]
                        }
                    ]));
                }
                
                setIsTyping(false);
            } catch (e) {
                console.error('Error enviando mensaje =>', e);
                const purgedHistory = [...history];
                const oldMessage = purgedHistory.pop();
                
                setHistory(purgedHistory);
                setNewMessage(oldMessage?.parts[0].text || '');
                setIsTyping(false);
            }
        }
    }
      
    return (
        <ChatContext.Provider value={{
            history,
            newMessage,
            setNewMessage,
            handleNewMessage,
            isTyping,
        }}>
            {children}
        </ChatContext.Provider>
    );
};
