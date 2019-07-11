import React from 'react';
import { toast } from 'react-toastify';

const FooListComponent = props => {
  const renderFoo = foo => <li key={foo.name}>{foo.name}</li>;
  const toastClick = () => {
    toast('"I\'ve been clicked!');
  };
  return (
    <div>
      <ul>
        {props.foos.map(f => {
          return renderFoo(f);
        })}
      </ul>
      <button onClick={toastClick}>Click Me!</button>
    </div>
  );
};

export default FooListComponent;
