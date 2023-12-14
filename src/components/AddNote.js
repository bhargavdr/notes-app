import React, { useState } from 'react';

const AddNote = ({ onSubmit }) => {
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    setAdd(!add);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, content);
    setAdd(!setAdd);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      {add && (
        <div className="noteform">
          <form onSubmit={handleSubmit}>
            <label>
              Title :{' '}
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter note title"
              ></input>
            </label>
            <br />
            <label>
              Content :{' '}
              <textarea
                type="text"
                rows={5}
                placeholder="Enter note content"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <button className={`addbtn ${add ? 'rotate' : ''}`} onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default AddNote;
