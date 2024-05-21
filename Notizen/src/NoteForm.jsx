import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote({
        text: note,
        id: Date.now()
      });
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Neue Notiz"
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default NoteForm;