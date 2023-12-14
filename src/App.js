import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    const newNote = { title, content };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Header />
      <AddNote onSubmit={addNote} />
      {notes.length > 0 &&
        notes.map((note, index) => (
          <Notes
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
    </div>
  );
}

export default App;
