var Reactor = require('../../reactor');
var actionTypes = require('./action_types');
var $ = require('jquery');

exports.switchView = function(view) {
  Reactor.dispatch(actionTypes.SWITCH_VIEW, {
    view: view,
  });
}

exports.selectUser = function(user) {
  Reactor.dispatch(actionTypes.SELECT_USER, {
    user: user
  })

}

exports.fetchUsers = function() {
  return $.ajax({
    url: 'http://localhost:3000/api/users',
  });
}

exports.fetchUser = function(userId) {
  return $.ajax({
    url: `http://localhost:3000/api/users/${userId}`,
  });
}

exports.fetchPrescriptions = function(userId) {
  return $.ajax({
    url: `http://localhost:3000/api/users/${userId}/prescriptions`,
  });
}

exports.fetchFills = function(prescriptionId) {
  return $.ajax({
    url: `http://localhost:3000/api/prescriptions/${prescriptionId}/fills`,
  });
}
