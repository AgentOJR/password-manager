"use client"
// app/page.tsx
import React, { useState } from 'react';
import PasswordForm from '../components/PasswordForm';
import PasswordList from '../components/PasswordList';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

interface Password {
  id: string;
  name: string;
  username: string;
  password: string;
}

const Home = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);

  const addPassword = (name: string, username: string, password: string) => {
    const encryptedPassword = CryptoJS.AES.encrypt(password, 'your-secret-key').toString();
    setPasswords([...passwords, { id: uuidv4(), name, username, password: encryptedPassword }]);
  };

  const deletePassword = (id: string) => {
    setPasswords(passwords.filter(password => password.id !== id));
  };

  return (
    <div>
      <h1>Password Manager</h1>
      <PasswordForm addPassword={addPassword} />
      <PasswordList passwords={passwords} deletePassword={deletePassword} />
    </div>
  );
};

export default Home;
