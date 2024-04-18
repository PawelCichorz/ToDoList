
import './Note.css'
import {useState} from 'react'


function Note (props) {





    return( <div className='notesmain'>
       
    <p className='zad'>Godzina: {props.name} </p>  
    <p className='zad'>Opis: <p>{props.description}</p></p>
    <div className='buttony'>
    <button className='butty' onClick={() => props.EditNoteHandler({title:props.name, body:props.description, _id:props.id})}>Edytuj</button><button className='buttys' onClick={(id) => props.deleteNote(props.id)}>Usuń</button>
    </div>
    </div>)
}

export default Note