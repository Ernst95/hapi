'use strict';

module.exports = [
    {
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
        
    },
    {
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
        
    }
]