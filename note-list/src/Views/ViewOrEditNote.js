import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import '../Css/EditNote.css'

export const Edit = props => {
    const date = new Date()
    const todo = props.item
    const editItemFunc = props.editItemFunc
    const [content, setContent] = useState(todo.content)
    const [time, setTime] = useState('1')
    setTimeout(() =>{if(time === '1') setContent(todo.content)}, 0.001)
    const GetContent = event =>{
        setTime('2')
        setContent(event.target.value) 
    }
    return(
        <div className="edit_content">
            <h1>~ {todo.title} ~</h1>
            <div className="layout_edit">
                <textarea 
                    placeholder="Enter your content here"
                    onChange={GetContent}
                    value={content}
                />
                <ReactMarkdown className="markdown">
                    {content}
                </ReactMarkdown>
            </div>
            <div className="button">
                <button onClick={() => editItemFunc({
                    id: todo.id,
                    title: todo.title,
                    content: content,
                    day: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear()
                })}> Save edit </button>
            </div>
                     
        </div>
    )
}