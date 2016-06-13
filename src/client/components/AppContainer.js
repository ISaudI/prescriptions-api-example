var React = require('react')
var Reactor = require('../reactor');
var UserList = require('./UserList');
var AppModule = require('../modules/app');

module.exports = React.createClass({
  mixins: [Reactor.ReactMixin],

  getInitialState() {
    return {
      users: [],
    };
  },

  getDataBindings() {
    return {
      activeView: AppModule.getters.activeView,
      selectedUser: AppModule.getters.selectedUser,
    }
  },

  componentDidMount() {
    AppModule.actions.fetchUsers().then(users => {
      console.log("fetch success", users)
      this.setState({ users });
    })
  },

  render() {
    if (this.state.activeView = AppModule.enums.ACTIVE_VIEWS.LIST_USERS) {
      return <UserList
        users={this.state.users}
        onClick={AppModule.actions.selectUser}
      />
    } else if (this.state.activeView = AppModule.enums.ACTIVE_VIEWS.SINGLE_USER) {
      return <SingleUser
        user={this.state.selectedUser}
      />
    }
  }
})
