'use strict';

const ObjectController = require('../../controllers/object');

module.exports = [
    {
        method: 'GET',
        path: '/object',
        options: {
            handler: ObjectController.getObjectOne,
            description: 'Get object',
            notes: 'Returns an object',
            tags: ['api', 'object'] // ADD THIS TAG
        }
        
    },
    {
        method: 'GET',
        path: '/objectnew',
        options: {
            handler: ObjectController.getObjectTwo,
            description: 'Get object',
            notes: 'Returns an object',
            tags: ['api', 'object'] // ADD THIS TAG
        }
        
    }
]