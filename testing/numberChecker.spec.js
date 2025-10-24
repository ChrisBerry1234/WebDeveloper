const numberChecker = require('./numberChecker');

describe("numberChecker", function(){
    test('returns true if inputted number is larger than 10', function(){
        expect(numberChecker(12)).toEqual(true);
    });
    test('returns false if inputted number is lower than 10', function(){
        expect(numberChecker(7)).toEqual(false);
    });
})