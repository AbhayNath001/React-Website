import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
function RegisterForm({ setUsers }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    schema.validate(formData, { abortEarly: false })
      .then(() => {
        console.log('Registration successful');
        setErrors({});
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setRegistrationSuccess(true);
        setUsers((prevUsers) => [...prevUsers, { email: formData.email, password: formData.password }]);
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
        setRegistrationSuccess(false);
      });
  };
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Register</Typography>
      {registrationSuccess && (
        <Typography color="success">Registration successful! You can now login.</Typography>
      )}
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}
export default RegisterForm;