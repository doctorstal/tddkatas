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
})