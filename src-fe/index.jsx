const React = require('react');
const ReactDom = require('react-dom');
const Test = require('./Test.jsx');

ReactDom.render(
  <Test />,
  document.getElementById('test-react')
);
