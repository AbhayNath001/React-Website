import React, { useState, useRef } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
      inputRef.current.focus();
    }
  };
  return (
    <div className="todoform">
      <input ref={inputRef} type="text" value={inputValue} placeholder="Add your task" onChange={handleInputChange}/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
export default TodoForm;