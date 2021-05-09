import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Account = () => {
  const { clean, currentUser, getName, updatePassword, updateEmail, updateName } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    setLoading(true);
    setError('');
    try {
      if (password) {
        await updatePassword(password);
      }

      if (email !== currentUser.email) {
        await updateEmail(email);
      }

      if (name !== (await getName())) {
        await updateName(name);
      }

      setLoading(false);
      setMessage('Update successful!');
    } catch {
      setError('Failed to update account');
    }
  }

  useEffect(() => {
    getName().then((name) => {
      setName(name);
      setEmail(currentUser.email);
    });

    return clean;
  }, [getName, clean, currentUser.email]);

  return (
    <Form message={message} error={error} title="Account" onFormSubmit={handleSubmit}>
      <Input
        maxLength={50}
        tag="input"
        handleChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        value={email}
        required
      >
        Email
      </Input>
      <Input
        minLength={6}
        maxLength={20}
        tag="input"
        handleChange={(e) => setName(e.target.value)}
        id="username"
        type="text"
        value={name}
        required
      >
        Username
      </Input>
      <Input
        minLength={6}
        maxLength={20}
        tag="input"
        handleChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        value={password}
        info="Leave blank to keep the same"
      >
        Password
      </Input>
      <Input
        tag="input"
        handleChange={(e) => setPasswordConfirm(e.target.value)}
        id="password-confirm"
        type="password"
        value={passwordConfirm}
      >
        Password Confirmation
      </Input>
      <Button disabled={loading} type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Account;
