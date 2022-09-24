

const Header = ({ handleToggleDarkMode, darkMode, handleAddNewNotes }) => {
    return(
    <div className="header">
        <h1>Notes</h1>
        <div>
        <i className="fas fa-plus-square"
            id="new-notes-icon"
            onClick={() => handleAddNewNotes((previousStauts)=> !previousStauts)}
            title="Click to Add new note."></i>
        <button 
        onClick={()=> 
        handleToggleDarkMode(
            (previousDarkMode)=> !previousDarkMode
            )
          }
             className="save"
             >
                {!darkMode ? 'Dark' : 'Light'} Mode
                </button>
        </div>
                
    </div>
    )
}

export default Header;
