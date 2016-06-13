var Reactor = require('../../reactor');
var actionTypes = require('./action_types');

exports.switchView = function(view) {
  Reactor.dispatch(actionTypes.SWITCH_VIEW, {
    view: view,
  });
}
