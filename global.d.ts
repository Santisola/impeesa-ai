interface MessagePart {
    text: string;
}
  

interface HistoryItem {
    role: 'user' | 'model';
    parts: MessagePart[]; 
}
  

interface ChatContextType {
    history: HistoryItem[];
    newMessage: string;
    setNewMessage: React.Dispatch<React.SetStateAction<string>>;
    handleNewMessage: (ev: React.FormEvent) => Promise<void>;
    isTyping: boolean;
}