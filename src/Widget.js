import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestReact from './TestReact';
import MemberActivity from './MemberActivity';

const Widget = (componentName ,elementQuery , props) => {
    const components = {
      'App' : <App/>,
      // 'TestReact' : <TestReact data={props}/>
      'TestReact' : <TestReact/>,
      'MemberActivity' : <MemberActivity/>
    }

    ReactDOM.render(
      components[componentName],
        document.querySelector(elementQuery) 
    );
  }

export default Widget;