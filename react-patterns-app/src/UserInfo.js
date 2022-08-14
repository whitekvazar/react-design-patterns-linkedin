import React from 'react';

export const UserInfo = ({ user }) => {
  const [name, age, hairColor, hobbies] = user || {};
  return user ? (
    <>
      <h3>NameL {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
