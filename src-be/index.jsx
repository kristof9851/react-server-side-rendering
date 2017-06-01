require('babel-register');
const appRootPath = require('app-root-path');
const express = require('express');
const hbs = require('express-handlebars');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Test = require('../src-fe/Test.jsx');
const app = express();

app.set('views', appRootPath + '/src-be/views');
app.engine('hbs', hbs({
  defaultLayout: 'index',
  extname: '.hbs',
  layoutsDir: appRootPath + '/src-be/views/layouts',
  partialsDir: appRootPath + '/src-be/views/partials'
}));
app.set('view engine', 'hbs');

app.use('/dist-fe', express.static(appRootPath + '/dist-fe'));

app.use('/', (req, res) => {
  res.render('index', {
    who: 'world',
    testReact: ReactDomServer.renderToString(<Test />)
  });
});

const server = app.listen(8080, () => {
  console.log(`Started on port ${server.address().port}`);
});
