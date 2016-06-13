var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('./components/AppContainer');

var AppModule = require('./modules/app');
AppModule.actions.switchView('prescriptions');

ReactDOM.render(
  <AppContainer

  />,
  document.getElementById('main')
)

