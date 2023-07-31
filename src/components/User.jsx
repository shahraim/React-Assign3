import React from 'react';
// import Error from './Error';
import Unauthen from './Unauthen';
import Settings from './Settings';

function User({ userName, isLoggedIn }) {
  return (
    <div className="user container">
      {isLoggedIn ? (
        <>
          <h1>Hi, {userName}</h1>
          <br />
        </>
      ) : (<Unauthen />)
      }

    </div>
  );
}

export default User;
