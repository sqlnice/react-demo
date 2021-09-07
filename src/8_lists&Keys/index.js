import React from 'react';
const NumberList = (props) => {
  const numbers = JSON.parse(props.numbers);
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};
export default NumberList;
