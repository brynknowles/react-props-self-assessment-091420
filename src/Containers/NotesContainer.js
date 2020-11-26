import React from 'react';
import Note from '../Components/Note'

class NotesContainer extends React.Component {
    // NotesContainer has an apiResponse method that returns an array of note objects
    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    renderAllNotes = () => {
        return this.apiResponse().map( noteObj => <Note key={noteObj.id} note={noteObj} />)
    }

    render() {
        // NotesContainer is responsible for rendering multiple Note components
        return (
            <ul>
                {this.renderAllNotes()}
            </ul>
        )
    }

}

export default NotesContainer;

