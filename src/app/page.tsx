'use client'

import { getHistory, saveInHistory } from "@/lib/localStorage";
import { useState } from "react";

interface AIResponse {
  status: number,
  data: {
    message: string
  }
}

export default function Home() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState<AIResponse | null | undefined>();
  
  const handleMessage = async () => {
    if (text) {
      console.log('VALUE', text);

      const fetchRes = await fetch('/api/test', {
        method: 'POST',
        body: JSON.stringify({
          message: text,
          history: getHistory()
        })
      })

      const res = await fetchRes.json()
      console.log('RES', res);

      if(res?.data?.message) {
        saveInHistory([
          {
            role: 'user',
            parts: [{text: text}]
          },
          {
            role: 'model',
            parts: [{text: res?.data?.message}]
          }
        ]);

        setResponse(res)
      }

    }
  }
  
  return (
    <>
      <section className="p-4 m-4 border border-gray-600 rounded-lg bg-slate-900">
        <h1>Holis</h1>
        <div className="form-group">
          <label htmlFor="message" className="block mb-2 mt-4">Mensaje</label>
          <input
            type="text"
            id="message"
            onChange={(ev) => setText(ev.target.value)}
            value={text}
            className="block border rounded-lg border-gray-600 bg-slate-900 py-1 px-2"
          />
        </div>
        <button
          onClick={() => handleMessage()}
          className="mt-4 border rounded-lg border-gray-600 px-4 py-2"
        >Enviar</button>
      </section>
      {(response && response.data.message) && <section className="p-4 m-4 border border-gray-600 rounded-lg bg-slate-900">
        Respuesta
        <p className="mt-4">{response.data.message}</p>
      </section>}
    </>
  );
}
