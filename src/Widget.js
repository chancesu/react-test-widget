import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestReact from './TestReact';
import MemberActivity from './MemberActivity';
const components = {
  'App' : App,
  // 'TestReact' : <TestReact data={props}/>
  'TestReact' : TestReact,
  'MemberActivity' : MemberActivity
};

const Widget = (componentName ,elementQuery , props) => {
    ReactDOM.render(
      React.createElement(components[componentName], props, null),
      document.querySelector(elementQuery) 
    );
  }

export default Widget;