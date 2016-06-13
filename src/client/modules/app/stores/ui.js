var actionTypes = require('../action_types');
var Nuclear = require('nuclear-js');
var toImmutable = Nuclear.toImmutable;
var enums = require('../enums');

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
      activeView: enums.ACTIVE_VIEWS.LIST_USERS,
      selectedUser: null,
    });
  },

  initialize() {
    this.on(actionTypes.SWITCH_VIEW, switchView);
    this.on(actionTypes.SELECT_USER, selectUser);
  },
});


function switchView(state, payload) {
  return state.set('activeView', payload.view);
}

function selectUser(state, { user }) {
  return state
    .set('activeView', enums.ACTIVE_VIEWS.SINGLE_USER)
    .set('selectedUser', user)
}

