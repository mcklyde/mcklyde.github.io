document.addEventListener('DOMContentLoaded', () => {
  console.log('Thanks to Jeremy Thomas for creating this template!');
});
import React from 'react';
import dom from 'react-dom';

let App = () => {
  return <div>

    Hello World!
  </div>






}
dom.render(
  <React.Fragment> <App/> </React.Fragment>,
  document.getElementById('root')
);