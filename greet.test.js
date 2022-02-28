const greet = require('./greet');

describe('test greet()', function () {
    it('should be called', function () {
        expect(greet('Elizabeth')).toBeCalled('Hello, Elizabeth');
    });
});