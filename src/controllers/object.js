'use strict';

module.exports = {
    getObjectOne(request, reply) {
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            userName: 'JohnDoe',
            id: 123
        }
        return user;
    },
    getObjectTwo(request, reply) {
        const user = {
            firstName: 'Jane',
            lastName: 'Doe',
            userName: 'JaneDoe',
            id: 321
        }
        return user;
    }
}