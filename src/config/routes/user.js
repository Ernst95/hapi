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
    },
    {
        method: 'POST',
        path: '/user/signup',
        options: {
            handler: UserController.signup,
            description: 'Sign up form',
            notes: 'Sign up user',
            tags: ['api', 'user'],
            validate: {
                payload: Joi.object({
                    username: Joi.string()
                                .alphanum()
                                .min(3)
                                .max(30)
                                .required(),
                    password: Joi.string()
                                .min(8),
                    repeat_password: Joi.string()
                                .min(8),
                    birth_year: Joi.number()
                                    .integer()
                                    .min(1900)
                                    .max(2013),
                    email: Joi.string()
                                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                })
                .with('username', 'birth_year')
                .with('password', 'repeat_password')
                .label('Sign up model')
            }
        }
    },
    {
        method: 'POST',
        path: '/user/signup/form',
        options: {
            handler: UserController.signup,
            description: 'Sign up form',
            notes: 'Sign up user',
            tags: ['api', 'user'],
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                payload: Joi.object({
                    username: Joi.string()
                                .alphanum()
                                .min(3)
                                .max(30)
                                .required(),
                    password: Joi.string()
                                .min(8),
                    repeat_password: Joi.string()
                                .min(8),
                    birth_year: Joi.number()
                                    .integer()
                                    .min(1900)
                                    .max(2013),
                    email: Joi.string()
                                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                })
                .with('username', 'birth_year')
                .with('password', 'repeat_password')
            }
        }
    }
]