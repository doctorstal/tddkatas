describe("FizzBuzz", function() {
    it("should return numbers for non dividable by 3 and 5", function() {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(2)).toBe('2');
    })

    it("should return Fizz for dividable by 3", function() {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
    })

    it("should return Buzz for dividable by 5", function() {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(25)).toBe('Buzz');
    })

})