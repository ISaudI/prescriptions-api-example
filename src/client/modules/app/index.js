var Nuclear = require('nuclear-js');
var Reactor = require('../../reactor');

Reactor.registerStores({
  api: require('./stores/api'),
  ui: require('./stores/ui'),
})

exports.actions = require('./actions');
