describe("String calculator", function() {
    it("should return 0 for empty string", function() {
        expect(add('')).toBe(0);
    })

    it("should return number value for single number strings", function() {
        expect(add('1')).toBe(1);
        expect(add('2')).toBe(2);
        expect(add('0')).toBe(0);
        expect(add('142')).toBe(142);
    })

    it("should return sum of two numbers for numbers separated by comma", function() {
        expect(add('1,2')).toBe(3);
        expect(add('0,166')).toBe(166);
    })

    it("should return summ of three and more numbers", function() {
        expect(add('1,2,3')).toBe(6);
        expect(add('3,4,0')).toBe(7);
    })
})