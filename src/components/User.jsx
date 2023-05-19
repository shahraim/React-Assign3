import React from 'react';

function User({ userName }) {
  return (
    <div className="user container">
      <h1>Hi, {userName}</h1>
      {/* Add your user profile content here */}
    </div>
  );
}

export default User;
