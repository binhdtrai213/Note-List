import React, {useState} from 'react';
import {List} from '../Views/ListOfNotes'
import {Add} from '../Views/AddContentNote'
import ReactMarkdown from 'react-markdown';

export const Control = () => {
    const [state, setState] = useState('') 
    return(
        <div>
            <List/>
            {<state/>}
        </div>
        
    )
}