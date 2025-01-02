import classes from './styles.module.css'

export default function Message({item}: {item: HistoryItem}) {
  return (
    <article
        className={item.role === 'model' ? classes.modelMessage : classes.userMessage}
    >   
        <p className='rounded-lg w-fit prose'>{item.parts[0].text}</p>
    </article>
  )
}
