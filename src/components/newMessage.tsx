"use client";
import { useContext } from "react";
import { CircleArrowUp } from 'lucide-react';
import { ChatContext } from "@/lib/chatContext";
import TextareaAutosize from 'react-textarea-autosize'

export default function NewMessage() {
	const {
		newMessage,
		setNewMessage,
		handleNewMessage
	} = useContext(ChatContext);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			if (e.shiftKey) {
			  return;
			}

			e.preventDefault();
			handleNewMessage(e);
		}
	}
	
	return (
		<form
			onSubmit={(ev) => handleNewMessage(ev)}
			className="border border-slate-200 px-4 py-2 mb-4 rounded-lg flex justify-between"
		>
			<div className="w-full">
				<label htmlFor="message" className="block mb-2 mt-4 sr-only">Nuevo mensaje</label>
				<TextareaAutosize
					id="message"
					placeholder="Escribile a BP..."
					value={newMessage}
					rows={1}
					maxRows={7}
					onChange={(ev) => setNewMessage(ev.target.value)}
					onKeyDown={handleKeyDown}
					className="block w-full py-1 px-2 outline-none resize-none"
				/>
			</div>
			<button disabled={newMessage === ''} className="disabled:opacity-15 transition-all"><CircleArrowUp size={24} /><span className="sr-only">Enviar</span></button>
		</form>
	);
}
