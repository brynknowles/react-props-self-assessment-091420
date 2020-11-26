import React from 'react'


function Note(props) {
    // Each Note component should be able to access the note key inside of its props and print the value of the note's content to the DOM as a li tag
    return <li>{props.note.content}</li>
}

export default Note;