import React from 'react';

interface IUser {
  name: string;
  email: string;
}

const User: React.FC<IUser> = ({ name, email }) => {
  return (
    <div>
      <strong>Nome: </strong> {name} <br />
      <strong>Email: </strong> {email} <br />
    </div>
  );
}

export default User;
