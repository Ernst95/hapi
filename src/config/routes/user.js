'use strict';

const UserController = require('../../controllers/user');
const Joi = require('@hapi/joi');

module.exports = [
    {
        method: 'GET',
        path: '/user/{user}',
        options: {
            handler: UserController.getUserName,
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
            handler: UserController.getUserNameAndAge,
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