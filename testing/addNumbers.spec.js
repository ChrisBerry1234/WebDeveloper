const addNumbers = require('./addNumbers');

describe('addNumbers', function() {
    test('adds the numbers together', function() {
        expect(addNumbers()).toBe(2);
    });
});
