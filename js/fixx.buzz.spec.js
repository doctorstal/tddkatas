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

    it('should return Buzz for devidable by 5', function() {
        expect(fizzBuzz(5)).toEqual('Buzz');
        expect(fizzBuzz(50)).toEqual('Buzz');
        expect(fizzBuzz(25)).toEqual('Buzz');
    })

    it('should return FizzBuzz for devidable by 3 and 5', function() {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
        expect(fizzBuzz(30)).toEqual('FizzBuzz');
        expect(fizzBuzz(45)).toEqual('FizzBuzz');
    })

});