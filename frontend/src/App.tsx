import React, { useEffect, useState } from 'react';
import api from './services/api';

interface IUser {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUser] = useState<IUser[]>([])

  useEffect(() => {
    api.get<IUser[]>('users').then(response => {
      setUser(response.data)
    })
  }, [])

  return (
    <div>
      {users.map(user => (
        <>
          <strong>{user.name}</strong>
          <p>{user.email}</p>
        </>
      ))}
    </div>
  );
}

export default App;
