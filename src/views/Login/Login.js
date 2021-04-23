import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login, clean } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history.push('/');
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  }

  useEffect(() => {
    return clean();
  });

  return (
    <Form error={error} title="Log In" onFormSubmit={handleLogin}>
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
        handleChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        value={password}
        required
      >
        Password
      </Input>
      <Button disabled={loading} type="submit">
        Log In
      </Button>
      <Link className={styles.link} to="/forgot-password">
        Forgot Password
      </Link>
    </Form>
  );
};

export default Login;
