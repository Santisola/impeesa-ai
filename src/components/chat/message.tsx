import Markdown from 'markdown-to-jsx'
import classes from './styles.module.css'

export default function Message({item}: {item: HistoryItem}) {
  return (
    <article
        className={item.role === 'model' ? classes.modelMessage : classes.userMessage}
    >   
        <p className='rounded-lg w-fit prose'><Markdown>{item.parts[0].text}</Markdown></p>
    </article>
  )
}
