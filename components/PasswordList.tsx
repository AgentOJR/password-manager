
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
          <li key={password.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-900">{password.name}</p>
              <p className="text-sm text-gray-600">{password.username}</p>
              <p className="text-sm text-gray-600">{password.password}</p>
            </div>
            <button
              onClick={() => deletePassword(password.id)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
