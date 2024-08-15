
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

interface PasswordItemProps {
  password: {
    id: string;
    name: string;
    username: string;
    password: string;
  };
  deletePassword: (id: string) => void;
}

function PasswordItem({ password, deletePassword }: PasswordItemProps) {
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);

  const toggleDecryption = () => {
    setIsDecrypted(!isDecrypted);
  };

  const decryptedPassword = CryptoJS.AES.decrypt(password.password, 'your-secret-key').toString(CryptoJS.enc.Utf8);

  return (
    <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
      <div className="text-gray-900">
        <strong>{password.name}</strong> ({password.username}) - 
        {isDecrypted ? (
          <span className="ml-2">{decryptedPassword}</span>
        ) : (
          <span className="ml-2">********</span>
        )}
      </div>
      <div className="flex items-center ml-4 space-x-4">
        <button
          onClick={toggleDecryption}
          className="text-blue-500 hover:text-blue-600 focus:outline-none"
        >
          {isDecrypted ? 'Hide' : 'Show'}
        </button>
        <button
          onClick={() => deletePassword(password.id)}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default PasswordItem;
