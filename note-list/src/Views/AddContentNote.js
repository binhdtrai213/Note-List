import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuidv4 } from 'uuid';
import '../Css/AddNote.css'

export const Add = props => {
    const addItemFunc = props.addItemFunc
    var date = new Date()
    const [content, setContent] = useState('')
    const GetContent = event =>{
        setContent(event.target.value) 
    }
    return (
        <div className="add_content">
            <h1>~ {props.title} ~</h1>
            <div className="content_add_note">
                <textarea 
                    placeholder="Enter your content here"
                    onChange={GetContent}
                />
                <ReactMarkdown className="markdown">
                    {content}
                </ReactMarkdown>
            </div>    
            <div className="button">
                <button onClick={() => addItemFunc({
                        id: uuidv4(),
                        title: props.title,
                        content: content,
                        day: date.getDate(),
                        month: date.getMonth() + 1,
                        year: date.getFullYear()
                        })
                }> Save </button>
            </div>
                
        </div>
    )
}