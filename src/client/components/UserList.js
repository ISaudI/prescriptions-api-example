var React = require('react')
var AppModule = require('../modules/app');

module.exports = function({ users, onClick }) {
  return <ul>{users.map(user => {
    var boundClick = onClick.bind(this, user);
    return <li onClick={boundClick}>
      <h3>{user.first_name} {user.last_name}
      </h3>
    </li>
    }

  )}</ul>
}
