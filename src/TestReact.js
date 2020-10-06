import React from 'react';
import './App.css';

function TestReact(props) {
  return (
    <div>
        TestReact component
        {props.data}
    </div>
  );
}

export default TestReact;
