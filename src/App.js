import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList  from './components/NotesList';
import Search from './components/Search'; 
import Header from './components/header';


// get localStorage data

const getLocalData = () => {
    const savedNotes = localStorage.getItem('react-notes-app-data');
  if(savedNotes){
    return JSON.parse(savedNotes);
  }

}
const App = () => {
  const [notes, setNotes] = useState(getLocalData());
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [addNewNotes, setAddNewNotes] = useState(false)
  const [characterLimit] = useState(200)

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }

}, [])

  useEffect(() => {
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
        );
  }, [notes]); 

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
   };

   const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
   }

   const editNote = (id, text) => {
    const date = new Date();
    const updateNotes = notes.map(note => {
      if(note.id === id) {
        note.text = text;
        note.date = date.toLocaleDateString();
      }
      return note;
    })
    setNotes(updateNotes)
   }

   getLocalData();

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
     
     <div className='container'>
      <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} handleAddNewNotes={setAddNewNotes}/>
      <Search handleSearchNote={setSearchText}/>
       <NotesList 
       notes={notes.filter((note)=> 
        note.text.toLowerCase().includes(searchText)
        )}
       characterLimit={characterLimit} 
       handleAddNote={addNote}
       handleDeleteNote={deleteNote}
       handleEditNote={editNote}
       handleAddNewNote={setAddNewNotes}
       handleAddNewNoteMode={addNewNotes}
        />
    </div>

    </div>
    
  );
};
export default App; 