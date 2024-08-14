
import React, { useState } from 'react';

interface PasswordFormProps {
  addPassword: (name: string, username: string, password: string) => void;
}

function PasswordForm({ addPassword }: PasswordFormProps) {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPassword(name, username, password);
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Account Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <button type="submit">Add Password</button>
    </form>
  );
}

export default PasswordForm;
