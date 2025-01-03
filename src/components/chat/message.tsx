import Markdown from 'markdown-to-jsx'
import classes from './styles.module.css'
import Image from 'next/image'
import src from '@/assets/bp.png'

const formattedText = (text:string) => {
  return text.split("\n").join('<br />')
}

export default function Message({item}: {item: HistoryItem}) {
  return item.role === 'model' ? (
    <article
        className={classes.modelMessage}
    >   
        <Image src={src} alt="Baden Powell" />
        <div className='rounded-lg w-fit prose self-center'><Markdown>{item.parts[0].text}</Markdown></div>
    </article>
  ) : (
    <article
        className={classes.userMessage}
    >   
        <pre className='rounded-lg w-fit prose'><Markdown>{item.parts[0].text}</Markdown></pre>
    </article>
  )
}
