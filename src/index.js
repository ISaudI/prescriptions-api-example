const _ = require('lodash');
const Hapi = require('hapi');
const path = require('path');

const server = new Hapi.Server();
server.connection({ port: 3000 });

var DATA = {
  users: require('../users.json'),
  fills: require('../fills.json'),
  prescriptions: require('../prescriptions.json'),
}

server.route({
  method: 'GET',
  path: '/api/users',
  handler: function (request, reply) {
    reply(DATA.users)
  }
});

server.route({
  method: 'GET',
  path: '/api/users/{id}',
  handler: function (request, reply) {
    var user = _.find(DATA.users, { id: Number(request.params.id) })
    if (!user) {
      reply().code(404);
      return;
    }
    reply(user);
  }
});

server.route({
  method: 'GET',
  path: '/api/users/{user_id}/prescriptions',
  handler: function (request, reply) {
    var results = _.filter(DATA.prescriptions, (item) => item.user_id === Number(request.params.user_id));
    reply(results);
  }
});

server.route({
  method: 'GET',
  path: '/api/prescriptions/{prescription_id}/fills',
  handler: function (request, reply) {
    var results = _.filter(DATA.fills, (item) => item.prescription_id === request.params.prescription_id);
    reply(results);
  }
});

server.register(require('inert'), (err) => {
	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
      console.log('in handler')
      reply.file(path.join(__dirname, './index.html'));
		}
	});

	server.route({
		method: 'GET',
    path: '/dist/main.js',
		handler: function (request, reply) {
      reply.file(path.join(__dirname, '../dist/main.js'));
		}
	});

	server.start((err) => {
		if (err) {
			throw err;
		}

		console.log('Server running at:', server.info.uri);
	});
});
