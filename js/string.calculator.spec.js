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

    it("should accept newline as delimeter", function() {
        expect(add('1,2\n3')).toBe(6);
        expect(add('2\n3,1')).toBe(6);
    })

    it("should support custom delimeter", function() {
        expect(add('//;\n3;4;93')).toBe(100);
        expect(add('//plus\n3plus4plus93')).toBe(100);
    })

    it("should throw on negative numbers", function() {
        expect(add.bind(null, '-1')).toThrowError('Negatives are not allowed. [-1]');
        expect(add.bind(null, '-1,2,3,-5')).toThrowError('Negatives are not allowed. [-1, -5]');
    })
})

describe("Delimeter extractor", function() {
    it("should extract delimeter", function() {
        expect(extractDelimeterAndLine('//;\n3;4')).toEqual({ delimeter: ';', line: '3;4' });
        expect(extractDelimeterAndLine('//plus\n3plus4')).toEqual({ delimeter: 'plus', line: '3plus4' });
        expect(extractDelimeterAndLine('3\n4,5')).toEqual({ delimeter: /,|\n/, line: '3\n4,5' });
    })
})