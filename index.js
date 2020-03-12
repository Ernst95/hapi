'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Joi = require('@hapi/joi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
        grouping: 'tags'
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

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
        path: '/user/{user}',
        options: {
            handler: function (request, h) {
                const user = request.params.user ? request.params.user : 'stranger';
                return `Hello ${user}`;
            },
            description: 'Get user',
            notes: 'Returns the user name passed in the path',
            tags: ['api', 'user'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    user : Joi.string()
                            .required()
                            .description('user name'),
                })
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/user/{user}/age/{age}',
        options: {
            handler: (request, h) => {
                const user = request.params.user;
                const age = request.params.age;
                return `Hello ${user} you are ${age} years old`;            
            },
            description: 'Get user name and age',
            notes: 'Returns user name and age passed in the path',
            tags: ['api', 'user'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    user : Joi.string()
                            .required()
                            .description('user name'),
                    age : Joi.number()
                            .required()
                            .description('user age'),
                })
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/object',
        options: {
            handler: function (request, h) {
                const user = {
                    firstName: 'John',
                    lastName: 'Doe',
                    userName: 'JohnDoe',
                    id: 123
                }
                return user;
            },
            description: 'Get object',
            notes: 'Returns an object',
            tags: ['api', 'object'] // ADD THIS TAG
        }
        
    });

    server.route({
        method: 'GET',
        path: '/objectnew',
        options: {
            handler: function (request, h) {
                const user = {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    userName: 'JaneDoe',
                    id: 321
                }
                return user;
            },
            description: 'Get object',
            notes: 'Returns an object',
            tags: ['api', 'object'] // ADD THIS TAG
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