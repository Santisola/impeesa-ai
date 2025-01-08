'use client'
import { CircleHelp } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function HowTo() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <>
        <button
            className="fixed w-10 h-10 bottom-2 right-4 p-2 rounded-full bg-slate-100 shadow-xl md:w-10 md:h-10 md:right-8 md:bottom-4"
            onClick={() => setIsOpen(!isOpen)}
        >
            <CircleHelp size={'100%'} stroke="#374151" />
        </button>

        {isOpen && <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen max-h-[100dvh] p-4 flex justify-center items-center">
                <div className="relative max-h-full px-4 py-2 transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <button
                    className='sticky right-2 top-0 left-full p-1 rounded-full bg-slate-100 shadow-xl'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <X />
                </button>
                <article className="prose w-full max-w-full">
                    <h3>¡Consejos para sacarle el máximo provecho a este chat con BP!</h3>
                    <p>Baden-Powell, fundador del Movimiento Scout Mundial, está aquí para inspirarte y ayudarte a planificar actividades scout memorables. Para aprovechar al máximo esta experiencia:</p>
                    <ol>
                        <li>
                            <h4>Sé claro y específico en tus preguntas:</h4>
                            <p>Cuanto más detallado seas, mejor podrá orientarte. Por ejemplo: </p>
                            <ul>
                                <li>"¿Qué actividades puedo hacer con la rama Caminantes para trabajar la solidaridad?"</li>
                                <li>"¿Cómo puedo adaptar una ceremonia de promesa para la Unidad Scout?"</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Piensa en los objetivos de tu actividad:</h4>
                            <p>¿Buscas trabajar un valor específico como el respeto o la cooperación? ¿Quieres que tus caminantes desarrollen habilidades prácticas? Comunica esto en tu pregunta.</p>
                        </li>
                        <li>
                            <h4>Consulta sobre enfoques pedagógicos:</h4>
                            <p>Pregunta sobre formas creativas de enseñar y transmitir los valores del escultismo. Por ejemplo:</p>
                            <ul>
                                <li>"¿Cómo puedo enseñar el respeto por la naturaleza en una salida al aire libre?"</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Aprovecha las referencias al Estatuto y Programa de las Ramas:</h4>
                            <p>
                            Baden-Powell tiene acceso a la información clave de Scouts de Argentina. Puedes pedir recomendaciones basadas en las guías oficiales. <br />
                            ¡Pero cuidado! Puede llegar a interpretar de manera incorrecta algunas cosas del programa, el chat al fin y al cabo es una herramienta. Idealmente siempre revisen los documentos oficiales ante cualquier duda. <br />
                            Por otro lado, los programas nuevos que fueron saliendo es posible que no los tenga a disposicion.
                            </p>
                        </li>
                        <li>
                            <h4>Inspírate con frases y reflexiones:</h4>
                            <p>Usa frases motivadoras de Baden-Powell para dar cierre a tus actividades o para inspirar a tu grupo.</p>
                        </li>
                        <li>
                            <h4>Resuelve dudas específicas:</h4>
                            <p>Si tienes dudas sobre ceremonias, roles, o cómo trabajar en equipo, este chat puede darte ideas prácticas y orientadas a la realidad scout.</p>
                        </li>
                    </ol>
                    <h3>Recuerda:</h3>
                    <p>Este chat está diseñado para ser una herramienta complementaria. Las ideas y sugerencias que recibas pueden adaptarse según las necesidades de tu grupo y siempre respetando los principios de Scouts de Argentina. <br />
                    ¡Que Baden-Powell te inspire a dejar el mundo mejor de cómo lo encontraste! 🌍✨</p>
                    <p className="text-center">¡Siempre Listo!<br /><em>Perro Entusiasta</em></p>
                </article>

                </div>
            </div>
        </div>}
        </>
    )
}
