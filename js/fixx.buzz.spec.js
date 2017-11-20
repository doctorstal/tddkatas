describe('FizzBuzz', function() {
    it('should return numbers', function() {
        expect(fizzBuzz(2)).toEqual('2');
        expect(fizzBuzz(1)).toEqual('1');
    })

    it('should return Fizz for devidable by 3', function() {
        expect(fizzBuzz(3)).toEqual('Fizz');
        expect(fizzBuzz(33)).toEqual('Fizz');
        expect(fizzBuzz(66)).toEqual('Fizz');
    })
});