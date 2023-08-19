import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

function LoginForm({ users }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = users.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      setLoginResult('Login successful');
    } else {
      setLoginResult('Login failed');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Login</Typography>
      {loginResult && <Typography color={loginResult === 'Login successful' ? 'success' : 'error'}>{loginResult}</Typography>}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}
export default LoginForm;