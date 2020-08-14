import React from 'react';

export default function imo(props) {
  console.log(props);
  return (
    <div>
      <h1>Imo</h1>
      {props.date}
    </div>
  )
}