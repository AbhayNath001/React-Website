import React, { useEffect } from 'react';

function TodoList({ todos }) {
  useEffect(() => {
    console.log('Todos prop updated:', todos);
  }, [todos]);

  return (
    <div className="todolist">
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </div>
  );
}
export default TodoList;