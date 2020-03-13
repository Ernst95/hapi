'user strict';

module.exports = {
    getUserName(request, reply) {
        let user = request.params.user ? request.params.user : 'stranger';
        return `Hello ${user}`;
    },
    getUserNameAndAge(request, reply) {
        let user = request.params.user;
        let age = request.params.age;
        return `Hello ${user} you are ${age} years old`;  
    }
}