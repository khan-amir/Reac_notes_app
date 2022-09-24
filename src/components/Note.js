import { useState } from 'react';
import { MdDeleteForever, MdModeEditOutline, MdSave } from 'react-icons/md';

const Note = ({ id, text, date, characterLimit, handleDeleteNote, handleEditNote }) => {
    const [isedit, setIsEdit] = useState(false);
    const [edit, setEdit] = useState(text);

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0)
        setEdit(event.target.value);
    };

    const handleEdit = (id) => {
        setIsEdit(true)
    }

    const handleSave = (id) => {
        handleEditNote(id, edit)
        setIsEdit(false)
    }

    return(
        <div className='note'>
            {!isedit ? <span>{ text }</span>
                   :
                   <textarea
                   rows='8'
                   cols='10'
                   value={edit}
                   onChange={handleChange}
                   className='edit-notes'
                   ></textarea>
            }
            <div className="note-footer">
                {!isedit ? <small>{ date }</small>
                         :
                           <small>{characterLimit - edit.length} Remaining</small>
                }
                <div>
                    <MdDeleteForever onClick={() => handleDeleteNote(id)} 
                    className='delete-icon' 
                    size='1.3em' />
                    {!isedit ? <MdModeEditOutline
                                onClick={() => handleEdit(id)}
                                className='edit-icon'
                                size='1.3em' />
                            :
                                <MdSave 
                                onClick={() => handleSave(id)}
                                className='edit-icon'
                                size='1.3em' />
                    }
                </div>
            </div>
        </div>
    ); 
};

export default Note;