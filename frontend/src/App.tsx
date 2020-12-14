import React, { useEffect, useState } from 'react';
import User from './components/User';
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
        <User key={user.email} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
