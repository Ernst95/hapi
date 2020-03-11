'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {
            return h.redirect('/');
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return `Welcome`;
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{user}',
        handler: (request, h) => {
            const user = request.params.user ? request.params.user : 'stranger';
            return `Hello ${user}`;
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{user*2}',
        handler: (request, h) => {
            const userParts = request.params.user.split('/');
            return `Hello ${userParts[0]} and ${userParts[1]}`;            
        }
    });

    server.route({
        method: 'GET',
        path: '/object',
        handler: function (request, h) {
            const user = {
                firstName: 'John',
                lastName: 'Doe',
                userName: 'JohnDoe',
                id: 123
            }
            return user;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();