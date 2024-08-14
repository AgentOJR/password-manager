
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
    <li>
      <strong>{password.name}</strong> ({password.username}) - 
      {isDecrypted ? decryptedPassword : '********'}
      <button onClick={toggleDecryption}>
        {isDecrypted ? 'Hide' : 'Show'}
      </button>
      <button onClick={() => deletePassword(password.id)}>Delete</button>
    </li>
  );
}

export default PasswordItem;
