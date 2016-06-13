var React = require('react')
var AppModule = require('../modules/app');

module.exports = React.createClass({
  getInitialState() {
    return {
      user: {},
    }
  },

  componentDidMount() {
    AppModule.actions.fetchPrescriptions(this.props.userId);
  }

})
