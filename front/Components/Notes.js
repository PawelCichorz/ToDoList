
import './Notes.css'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import Note from './Note'
import Modal from 'react-modal'
import EditNote from './EditNote'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Notes (props) {
  //modal
  //poniedziałek
const [modalm,Setmodalm] = useState(false)
//wtorek
const [modalt,Setmodalt] = useState(false)
//sroda
const [modalw,Setmodalw] = useState(false)
//czwartek
const [modalth,Setmodalth] = useState(false)
//piatek
const [modalf,Setmodalf] = useState(false)
//sobota
const [modals,Setmodals] = useState(false)
//niedziela
const [modalsu,Setmodalsu] = useState(false)

//otwieranie dodawania notatki
//poniedziałek
const [addm,Setaddm] = useState(false)
//wtorek
const [addt,Setaddt] = useState(false)
//sroda
const [addw,Setaddw] = useState(false)
//czwartek
const [addth,Setaddth] = useState(false)
//piatek
const [addf,Setaddf] = useState(false)
//sobota
const [adds,Setadds] = useState(false)
//niedziela
const [addsu,Setaddsu] = useState(false)


// tytuł notatki = titlle a desc = body
//poniedziałkowe
const [titlem,Settitlem] = useState('')
const [descm,Setdescm] = useState('')
//wtorkowe
const [titlet,Settitlet] = useState('')
const [desct,Setdesct] = useState('')
//srodowe
const [titlew,Settitlew] = useState('')
const [descw,Setdescw] = useState('')
//czwartkowe
const [titleth,Settitleth] = useState('')
const [descth,Setdescth] = useState('')
//piatkowe
const [titlef,Settitlef] = useState('')
const [descf,Setdescf] = useState('')
//sobotnie
const [titles,Settitles] = useState('')
const [descs,Setdescs] = useState('')
//niedzielne
const [titlesu,Settitlesu] = useState('')
const [descsu,Setdescsu] = useState('')

//stan w którym przechowywane są notatki przy każdej funkcji to edytuje
//Poniedziałkowe
const [notatkam,Setnotatkam] = useState([])
//Wtorkowe
const [notatkat,Setnotatkat] = useState([])
//srodowe
const [notatkaw,Setnotatkaw] = useState([])
//czwartkowe
const [notatkath,Setnotatkath] = useState([])
//piatkowe
const [notatkaf,Setnotatkaf] = useState([])
//sobota
const [notatkas,Setnotatkas] = useState([])
//niedziela
const [notatkasu,Setnotatkasu] = useState([])


const history = useNavigate()

const [editNote,Seteditnote] = useState ({})

//Funkcje Poniedziałek

async function fetchNotes ()  {
    const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notesm')

    const notes = res.data
    Setnotatkam(notes)

}

useEffect(() => {
  fetchNotes();
}, []);

 async function deleteNote (id) {
  await axios.delete(`https://api.mieszkaniaskawina.net.pl/notesm/${id}`)
    const notatkas = [...notatkam].filter(note => note._id !== id)
     Setnotatkam(notatkas)
}
const openAdd = () => {
    Setaddm(!addm)
}
async function AddNote  (){

   const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notesm',{title:titlem,body:descm})
   const newNote =res.data
   const nota = [...notatkam,newNote]
   Setnotatkam(nota)
    Settitlem('')
    Setdescm('')
    Setaddm(false)

    
}



async function Editnote  (note) {
   
   
    const notes = [...notatkam]
    const index = notes.findIndex(x => x._id === note._id)
    notes[index] = note
    await axios.put(`https://api.mieszkaniaskawina.net.pl/notesm/${note._id}`,note)
    Setnotatkam(notes)
    Setmodalm(false)

}
//Funkcje wtorek

async function fetchNotesT ()  {
  const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notest')
  const notes = res.data
  Setnotatkat(notes)

}

useEffect(() => {
fetchNotesT();
}, []);

async function deleteNoteT (id) {
await axios.delete(`https://api.mieszkaniaskawina.net.pl/notest/${id}`)
  const notatkas = [...notatkat].filter(note => note._id !== id)
   Setnotatkat(notatkas)
}
const openAddT = () => {
  Setaddt(!addt)
}
async function AddNoteT  (){

 const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notest',{title:titlet,body:desct})
 const newNote =res.data
 const nota = [...notatkat,newNote]
 Setnotatkat(nota)
  Settitlet('')
  Setdesct('')
  
}



async function EditnoteT  (note) {
 
 
  const notes = [...notatkat]
  const index = notes.findIndex(x => x._id === note._id)
  notes[index] = note
  await axios.put(`https://api.mieszkaniaskawina.net.pl/notest/${note._id}`,note)
  Setnotatkat(notes)
  Setmodalt(false)}
//sroda
async function fetchNotesW ()  {
  const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notess')
  const notes = res.data
  Setnotatkaw(notes)

}

useEffect(() => {
fetchNotesW();
}, []);

async function deleteNoteW (id) {
await axios.delete(`https://api.mieszkaniaskawina.net.pl/notess/${id}`)
  const notatkas = [...notatkaw].filter(note => note._id !== id)
   Setnotatkaw(notatkas)
}
const openAddW = () => {
  Setaddw(!addw)
}
async function AddNoteW  (){

 const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notess',{title:titlew,body:descw})
 const newNote =res.data
 const nota = [...notatkaw,newNote]
 Setnotatkaw(nota)
  Settitlew('')
  Setdescw('')
  
}



async function EditnoteW  (note) {
 
 
  const notes = [...notatkaw]
  const index = notes.findIndex(x => x._id === note._id)
  notes[index] = note
  await axios.put(`https://api.mieszkaniaskawina.net.pl/notess/${note._id}`,note)
  Setnotatkaw(notes)
  Setmodalw(false)}
//czwartek

async function fetchNotesTh ()  {
  const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notesc')
  const notes = res.data
  Setnotatkath(notes)

}

useEffect(() => {
fetchNotesTh();
}, []);

async function deleteNoteTh (id) {
await axios.delete(`https://api.mieszkaniaskawina.net.pl/notesc/${id}`)
  const notatkas = [...notatkath].filter(note => note._id !== id)
   Setnotatkath(notatkas)
}
const openAddTh = () => {
  Setaddth(!addth)
}
async function AddNoteTh  (){

 const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notesc',{title:titleth,body:descth})
 const newNote =res.data
 const nota = [...notatkath,newNote]
 Setnotatkath(nota)
  Settitleth('')
  Setdescth('')
 
  
}



async function EditnoteTh  (note) {
 
 
  const notes = [...notatkath]
  const index = notes.findIndex(x => x._id === note._id)
  notes[index] = note
  await axios.put(`https://api.mieszkaniaskawina.net.pl/notesc/${note._id}`,note)
  Setnotatkath(notes)
  Setmodalth(false)}


//piątek
async function fetchNotesF ()  {
  const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notespi')
  const notes = res.data
  Setnotatkaf(notes)

}

useEffect(() => {
fetchNotesF();
}, []);

async function deleteNoteF (id) {
await axios.delete(`https://api.mieszkaniaskawina.net.pl/notespi/${id}`)
  const notatkas = [...notatkaf].filter(note => note._id !== id)
   Setnotatkaf(notatkas)
}
const openAddF = () => {
  Setaddf(!addf)
}
async function AddNoteF  (){

 const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notespi',{title:titlef,body:descf})
 const newNote =res.data
 const nota = [...notatkaf,newNote]
 Setnotatkaf(nota)
  Settitlef('')
  Setdescf('')
  
}



async function EditnoteF  (note) {
 
 
  const notes = [...notatkaf]
  const index = notes.findIndex(x => x._id === note._id)
  notes[index] = note
  await axios.put(`https://api.mieszkaniaskawina.net.pl/notespi/${note._id}`,note)
  Setnotatkaf(notes)
  Setmodalf(false)}

  //sobota

  async function fetchNotesS ()  {
    const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notesso')
    const notes = res.data
    Setnotatkas(notes)
  
  }
  
  useEffect(() => {
  fetchNotesS();
  }, []);
  
  async function deleteNoteS (id) {
  await axios.delete(`https://api.mieszkaniaskawina.net.pl/notesso/${id}`)
    const notatkasf = [...notatkas].filter(note => note._id !== id)
     Setnotatkas(notatkasf)
  }
  const openAddS = () => {
    Setadds(!adds)
  }
  async function AddNoteS  (){
  
   const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notesso',{title:titles,body:descs})
   const newNote =res.data
   const nota = [...notatkas,newNote]
   Setnotatkas(nota)
    Settitles('')
    Setdescs('')
    
  }
  
  
  
  async function EditnoteS  (note) {
   
   
    const notes = [...notatkas]
    const index = notes.findIndex(x => x._id === note._id)
    notes[index] = note
    await axios.put(`https://api.mieszkaniaskawina.net.pl/notesso/${note._id}`,note)
    Setnotatkas(notes)
    Setmodals(false)}

    //niedziela
    async function fetchNotesSu ()  {
      const res =  await axios.get('https://api.mieszkaniaskawina.net.pl/notesn')
      const notes = res.data
      Setnotatkasu(notes)
    
    }
    
    useEffect(() => {
    fetchNotesSu();
    }, []);
    
    async function deleteNoteSu (id) {
    await axios.delete(`https://api.mieszkaniaskawina.net.pl/notesn/${id}`)
      const notatkas = [...notatkasu].filter(note => note._id !== id)
       Setnotatkasu(notatkas)
    }
    const openAddSu = () => {
      Setaddsu(!addsu)
    }
    async function AddNoteSu  (){
    
     const res = await axios.post('https://api.mieszkaniaskawina.net.pl/notesn',{title:titlesu,body:descsu})
     const newNote =res.data
     const nota = [...notatkasu,newNote]
     Setnotatkasu(nota)
      Settitlesu('')
      Setdescsu('')
      
    }
    
    
    
    async function EditnoteSu (note) {
     
     
      const notes = [...notatkasu]
      const index = notes.findIndex(x => x._id === note._id)
      notes[index] = note
      await axios.put(`https://api.mieszkaniaskawina.net.pl/notesn/${note._id}`,note)
      Setnotatkasu(notes)
      Setmodalsu(false)}

//inne funkcje


const ToglleModal = () =>{
  Setmodalm(!modalm)

}
//Poniedzialek
const EditNoteHandler = (note) =>{
  Setmodalm(!modalm)
  Seteditnote(note)
}
//Wtorek
const EditNoteHandlerT = (note) =>{
  Setmodalt(!modalt)
  Seteditnote(note)
}
//Sroda
const EditNoteHandlerW = (note) =>{
  Setmodalw(!modalw)
  Seteditnote(note)}
//czwartek
const EditNoteHandlerTh = (note) =>{
  Setmodalth(!modalth)
  Seteditnote(note)}
  //piątek
  const EditNoteHandlerF = (note) =>{
    Setmodalf(!modalf)
    Seteditnote(note)}
    //sobota
    const EditNoteHandlerS = (note) =>{
      Setmodals(!modals)
      Seteditnote(note)}
      //niedziela
      const EditNoteHandlerSu = (note) =>{
        Setmodalsu(!modalsu)
        Seteditnote(note)}

const logOut = () =>{
  const setSession = props.setSession
  setSession(null)
  history('/')

}


const customStyles = {
    content: {
    height:'350px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
    return( <div className='lolek'>
      {notatkam ? (<> <div className='monday border'>
        <Modal
isOpen={modalm} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => Editnote(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>
        <p className='zada '>Poniedziałek </p>
      {
        notatkam.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNote(id)} EditNoteHandler={(note) => EditNoteHandler(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAdd}>Dodaj </button>
      {  addm ?  (<>
      <label className='la'>Godzina:</label><input className='la' value={titlem} type='text' onChange={e => Settitlem(e.target.value)}></input>
      <label className='la'>Opis:</label><input className='la'  value={descm} type='text' onChange={e => Setdescm(e.target.value)}></input> 
      <button onClick={() => AddNote()}>Dodaj</button></>): null} 
      
      
      </div>

      </div></>) :null}

      {notatkat ? (<>
      <div className='Tuesday border'>
        <Modal
isOpen={modalt} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteT(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Wtorek :</p>
      {
        notatkat.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteT(id)} EditNoteHandler={(note) => EditNoteHandlerT(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddT}>Dodaj </button>
      {  addt ?  (<>
      <label>Godzina:</label><input value={titlet} type='text' onChange={e => Settitlet(e.target.value)}></input>
      <label>Opis:</label><input value={desct} type='text' onChange={e => Setdesct(e.target.value)}></input> 
      <button onClick={() => AddNoteT()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}

      {notatkaw ? (<>
      <div className='Wendesday border'>
        <Modal
isOpen={modalw} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteW(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Środa :</p>
      {
        notatkaw.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteW(id)} EditNoteHandler={(note) => EditNoteHandlerW(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddW}>Dodaj </button>
      {  addw ?  (<>
      <label>Godzina:</label><input value={titlew} type='text' onChange={e => Settitlew(e.target.value)}></input>
      <label>Opis:</label><input value={descw} type='text' onChange={e => Setdescw(e.target.value)}></input> 
      <button onClick={() => AddNoteW()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}
      
      {notatkath ? (<>
      <div className='Thursday border'>
        <Modal
isOpen={modalth} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteTh(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Czwartek :</p>
      {
        notatkath.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteTh(id)} EditNoteHandler={(note) => EditNoteHandlerTh(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddTh}>Dodaj </button>
      {  addth ?  (<>
      <label>Godzina:</label><input value={titleth} type='text' onChange={e => Settitleth(e.target.value)}></input>
      <label>Opis:</label><input value={descth} type='text' onChange={e => Setdescth(e.target.value)}></input> 
      <button onClick={() => AddNoteTh()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}


      {notatkaf ? (<>
      <div className='Friday border'>
        <Modal
isOpen={modalf} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteF(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Piątek :</p>
      {
        notatkaf.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteF(id)} EditNoteHandler={(note) => EditNoteHandlerF(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddF}>Dodaj </button>
      {  addf ?  (<>
      <label>Godzina:</label><input value={titlef} type='text' onChange={e => Settitlef(e.target.value)}></input>
      <label>Opis:</label><input value={descf} type='text' onChange={e => Setdescf(e.target.value)}></input> 
      <button onClick={() => AddNoteF()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}

      {notatkas ? (<>
      <div className='Saturday border'>
        <Modal
isOpen={modals} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteS(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Sobota :</p>
      {
        notatkas.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteS(id)} EditNoteHandler={(note) => EditNoteHandlerS(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddS}>Dodaj </button>
      {  adds ?  (<>
      <label>Godzina:</label><input value={titles} type='text' onChange={e => Settitles(e.target.value)}></input>
      <label>Opis:</label><input value={descs} type='text' onChange={e => Setdescs(e.target.value)}></input> 
      <button onClick={() => AddNoteS()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}

      {notatkasu ? (<>
      <div className='Sunday border'>
        <Modal
isOpen={modalsu} contentLabel='Edytuj Notatkę' style={
 customStyles
  }>
<EditNote name={editNote.title} description={editNote.body} id ={editNote._id} onEdit = {(note) => EditnoteSu(note)}/>
<button onClick={ToglleModal}>Anuluj</button>
</Modal>

        <p>Niedziela :</p>
      {
        notatkasu.map(notatka => (<Note key={notatka._id} name={notatka.title} description={notatka.body} id={notatka._id} deleteNote = {(id) => deleteNoteSu(id)} EditNoteHandler={(note) => EditNoteHandlerSu(note)} />))
      }

      <div className='addnote'><button className='butt' onClick={openAddSu}>Dodaj</button>
      {  addsu ?  (<>
      <label>Godzina:</label><input value={titlesu} type='text' onChange={e => Settitlesu(e.target.value)}></input>
      <label>Opis:</label><input value={descsu} type='text' onChange={e => Setdescsu(e.target.value)}></input> 
      <button onClick={() => AddNoteSu()}>Dodaj</button></>): null}
      
      
      </div>

   
      </div></>) :null}
      <Link to={'/'}>Cofnij</Link>
      <button onClick={logOut}>Wyloguj</button>
    </div>)
}

export default Notes