import React from 'react';
import { useState } from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Grid } from '@mui/material';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
    <div className='main'>
      <Sidebar />
      <Navbar />
    </div>
    <div className="App">
      <hr/>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
  </div>
  <div>
  <Container maxWidth="sm">
      <Grid container spacing={2}></Grid>
    </Container>
    <div className="App">
      <hr/>
      <RegisterForm setUsers={setUsers} />
      <LoginForm users={users} />
    </div>
  </div>
  </div>
  );
}
export default App;