const React = require('react');
const ReactDom = require('react-dom');
const Test = require('./Test.jsx');

const data = window.testReactData;

ReactDom.render(
  <Test {...data} />,
  document.getElementById('test-react')
);
