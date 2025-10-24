const helloworld = require('./helloWorld');

describe('Hello World', function() {
    test('says "Hello, World!"', function() {
        expect(helloworld()).toEqual('Hello, World!');
    });
});



