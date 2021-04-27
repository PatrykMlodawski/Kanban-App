import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const history = useHistory();
  const { signup, clean } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, name, password);
      history.push('/');
    } catch {
      setError('Failed to sign up');
    }

    setLoading(false);
  }

  useEffect(() => {
    return clean();
  });

  return (
    <Form error={error} title="Log In" onFormSubmit={handleSubmit}>
      <Input
        handleChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        value={email}
        required
      >
        Email
      </Input>
      <Input
        handleChange={(e) => setName(e.target.value)}
        id="username"
        type="text"
        value={name}
        required
      >
        Username
      </Input>
      <Input
        handleChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        value={password}
        required
      >
        Password
      </Input>
      <Input
        handleChange={(e) => setPasswordConfirm(e.target.value)}
        id="password-confirm"
        type="password"
        value={passwordConfirm}
        required
      >
        Password Confirmation
      </Input>
      <Button disabled={loading} type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;
