import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, characterLimit, handleAddNote, handleDeleteNote, handleEditNote, handleAddNewNote, handleAddNewNoteMode }) => {
    return(
    <div className="notes-list">
      {notes.map((note) => (
        <Note
        key={note.id}
        id={note.id}
        text={note.text} 
        date={note.date}
        characterLimit={characterLimit}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
        />
      ))} 
      {handleAddNewNoteMode && <AddNote characterLimit={characterLimit} handleAddNote={handleAddNote} handleSaveNewNote={handleAddNewNote}/>}



    </div>
    );
};

export default NotesList;
