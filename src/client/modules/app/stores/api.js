var actionTypes = require('../action_types');
var Nuclear = require('nuclear-js');
var toImmutable = Nuclear.toImmutable;

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
      activeView: 'users',
    });
  },

  initialize() {
    this.on(actionTypes.SWITCH_VIEW, switchView);
  },

});


function switchView(state, payload) {
  return state.set('activeView', payload.view);
}
