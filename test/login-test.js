var should = require('should');
var login = require('../lib/login');

describe('User management', function() {
    var username = 'tom',
        password = 'mochatest',
        hashPass;
        
    describe('Adding', function() {
        
    });
    describe('Login', function() {
        // Find username from the database and retrive the data
        it('should find the username in the database', function() {
            var dbUsernameData = login.getUserData(username);
            dbUsernameData.user.should.equal(username);
        });
    // Hash the password for the user
    // Compare the hashed password in the database to the password given
    });
});