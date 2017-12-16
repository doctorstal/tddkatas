describe('FizzBuzz', function () {
    it('should return numbers', function () {
        expect(fizzBuzz(1)).toEqual('1');
        expect(fizzBuzz(2)).toEqual('2');
        expect(fizzBuzz(4)).toEqual('4');
    })

    it('should return Fizz for devisible by 3', function () {
        expect(fizzBuzz(3)).toEqual('Fizz');
        expect(fizzBuzz(6)).toEqual('Fizz');
        expect(fizzBuzz(66)).toEqual('Fizz');
    })

    it('should return Buzz for devisible by 5', function () {
        expect(fizzBuzz(5)).toEqual('Buzz');
        expect(fizzBuzz(10)).toEqual('Buzz');
        expect(fizzBuzz(20)).toEqual('Buzz');
    })

    it('should return FizzBuzz for devisible both by 3 and 5 (i.e. 15)', function () {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
        expect(fizzBuzz(30)).toEqual('FizzBuzz');
    })

});