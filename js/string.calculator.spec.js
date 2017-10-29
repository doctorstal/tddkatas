describe("String calculator. Simplest test case.", function() {
    it("Empty string will return 0. (i.e. add('') == 0", function() {
        expect(add('')).toBe(0);
    });

    it("One number value should be just returned as a number", function() {
        expect(add('1')).toBe(1);
        expect(add('234')).toBe(234);
    });

    it("Two numbers should be added.", function() {
        expect(add('1,1')).toBe(2);
        expect(add('2,3')).toBe(5);
        expect(add('0,0')).toBe(0);
    });

})