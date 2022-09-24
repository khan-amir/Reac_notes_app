import { useState } from "react";

const AddNote = ({ characterLimit, handleAddNote, handleSaveNewNote }) => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0)
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText); 
            setNoteText('');
            handleSaveNewNote(false)
        }
        else{
            alert('Please Enter some text to Save a New notes!')
        }
    };

    return (
        <div className='note new'>
            <textarea 
            rows='8'
            cols='10'
            placeholder="Type to ad d a note..."
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;