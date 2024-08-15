
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
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-800">Saved Passwords</h2>
      <ul className="mt-4 space-y-4">
        {passwords.map((password) => (
          <PasswordItem 
            key={password.id} 
            password={password} 
            deletePassword={deletePassword} 
          />
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
