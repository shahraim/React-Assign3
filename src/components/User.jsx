import React from 'react';
// import Error from './Error';
import Unauthen from './Unauthen';

function User({ userName, isLoggedIn }) {
  return (
    <div className="user container">
      {isLoggedIn ? (
        <h1>Hi, {userName}</h1>
      ) : (<Unauthen />)
      }
    </div>
  );
}

export default User;
