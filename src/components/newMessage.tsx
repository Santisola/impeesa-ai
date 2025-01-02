"use client";
import { FormEvent, useContext, useState } from "react";
import { CircleArrowUp } from 'lucide-react';
import { ChatContext } from "@/lib/chatContext";

export default function NewMessage() {
	const {
		newMessage,
		setNewMessage,
		handleNewMessage
	} = useContext(ChatContext);

	return (
		<form
			onSubmit={(ev) => handleNewMessage(ev)}
			className="border border-slate-200 px-4 py-2 mb-4 rounded-lg flex justify-between"
		>
			<div className="w-full">
				<label htmlFor="message" className="block mb-2 mt-4 sr-only">Nuevo mensaje</label>
				<input
					type="text"
					id="message"
					placeholder="Escribile a BP..."
					value={newMessage}
					onChange={(ev) => setNewMessage(ev.target.value)}
					className="block w-full py-1 px-2 outline-none"
				/>
			</div>
			<button disabled={newMessage === ''} className="disabled:opacity-15 transition-all"><CircleArrowUp size={24} /><span className="sr-only">Enviar</span></button>
		</form>
	);
}
