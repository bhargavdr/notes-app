import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const Notes = ({ index, title, content, onDelete }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="deletebtn" onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default Notes;
