import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Add} from './AddContentNote'
import {Edit} from './ViewOrEditNote'
import '../Css/ListOfNotes.css'

export const List = () => {
    const date = new Date()
    const getValue = () =>{
        if(JSON.parse(localStorage.getItem('items')) === null)
            return [{
                id: uuidv4(),
                title: 'Hello',
                content: 'Nothing',
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()}]
        else return JSON.parse(localStorage.getItem('items'))
    }
    const [state, setState] = useState()
    const [title, setTitle] = useState('')
    const [items, setItems] = useState(getValue())
    
    const changeTitle = event => setTitle(event.target.value)
    const addItem = todoItem =>{
        setItems([...items , todoItem])
        localStorage.setItem('items', JSON.stringify([...items , todoItem]))
        setState()
    }
    const editItem = todoEdit =>{
        const newListItem = items.map(todo => todo.id !== todoEdit.id ? todo : todoEdit)
        setItems(newListItem)
        localStorage.setItem('items', JSON.stringify(newListItem))
        setState()     
    }
    const deleteItem = id =>{
        const newListItem = items.filter(Todo => Todo.id!==id )
        setItems(newListItem)
        localStorage.setItem('items', JSON.stringify(newListItem))
    }
    
    return (
        <div className="all">
            <div className="list_of_notes">
                <form onSubmit={event => event.preventDefault()}  className="content_list_of_notes">
                    <input type="text" placeholder="Enter your new title" value={title} onChange={changeTitle}/>
                    <button className="button_list" onClick={() => {
                        setState(<Add title={title} addItemFunc={addItem}/>)
                        setTitle('')
                    }}>Add</button>
                </form>
                {items.map(todo => 
                    <div className="content_list_of_notes">
                        <button className="button_list" onClick={() => 
                        setState(<Edit item={todo} editItemFunc={editItem}/>)}>
                            <h5 className="day_of_note">{todo.day} / {todo.month} / {todo.year}</h5>
                            <h1 className="title_of_note">{todo.title}</h1>
                        </button>
                        <button onClick={deleteItem.bind(this, todo.id)} className="button_list">
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <div className="add_or_edit">
                {state}
            </div>
        </div>
    )
}