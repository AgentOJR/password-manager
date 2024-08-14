
import React from 'react';
import PasswordItem from './PasswordItem';

interface PasswordListProps {
    passwords: {
        id: string;
        name: string;
        username: string;
        password: string;
    }[];
    deletePassword: (id: string) => void;
}

function PasswordList({ passwords, deletePassword }: PasswordListProps) {
  return (
    <ul>
      {passwords.map(password => (
        <PasswordItem key={password.id} password={password} deletePassword={deletePassword} />
      ))}
    </ul>
  );
}

export default PasswordList;
