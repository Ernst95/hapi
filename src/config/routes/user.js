'use strict';

const Joi = require('@hapi/joi');

module.exports = [
    {
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
    },
    {
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
    }
]

// exports.register = function(server, options, next) {

//     server.route({
//         method: 'GET',
//         path: '/user/{user}',
//         options: {
//             handler: function (request, h) {
//                 const user = request.params.user ? request.params.user : 'stranger';
//                 return `Hello ${user}`;
//             },
//             description: 'Get user',
//             notes: 'Returns the user name passed in the path',
//             tags: ['api', 'user'], // ADD THIS TAG
//             validate: {
//                 params: Joi.object({
//                     user : Joi.string()
//                             .required()
//                             .description('user name'),
//                 })
//             }
//         }
//     });

//     server.route({
//         method: 'GET',
//         path: '/user/{user}/age/{age}',
//         options: {
//             handler: (request, h) => {
//                 const user = request.params.user;
//                 const age = request.params.age;
//                 return `Hello ${user} you are ${age} years old`;            
//             },
//             description: 'Get user name and age',
//             notes: 'Returns user name and age passed in the path',
//             tags: ['api', 'user'], // ADD THIS TAG
//             validate: {
//                 params: Joi.object({
//                     user : Joi.string()
//                             .required()
//                             .description('user name'),
//                     age : Joi.number()
//                             .required()
//                             .description('user age'),
//                 })
//             }
//         }
//     });

// };

// exports.register.attributes = {
//     name: 'routes-user'
// };