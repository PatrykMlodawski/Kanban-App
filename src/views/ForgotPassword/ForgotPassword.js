import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <Form message={message} error={error} title="Password Reset" onFormSubmit={handleSubmit}>
      <Input
        tag="input"
        handleChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        value={email}
        required
      >
        Email
      </Input>
      <Button disabled={loading} type="submit">
        Reset Password
      </Button>
    </Form>
  );
};

export default ForgotPassword;
