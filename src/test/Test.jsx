import React from 'react';
import User from './User';
import Admin from './Admin';

// const Test = ({ users }) => users.map((user) => <User key={user.id} name={user.name} />);
const Test = ({ users }) =>
  users.map((user, index) => {
    const Component = user.role === 'admin' ? Admin : User;
    return <Component key={index} name={user.name} />;
  });

export default Test;
