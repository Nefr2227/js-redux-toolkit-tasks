import React, { useState } from 'react';

const TodoForm = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(event, text);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group has-validation">
        <input
          type="text"
          className="form-control me-3"
          data-testid="input"
          placeholder="I am going..."
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append">
          <input
            type="submit"
            className="btn btn-primary btn-sm"
            data-testid="submit"
            value="Add"
          />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;