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

describe("String split", function() {
    it("Should return arr with one value on split", function() {
        expect('222'.split(',').length).toBe(1);
        expect('222'.split(',')[0]).toBe('222');
    })
});

describe("Step2. Unknown amount of numbers.", function() {
    it("Three numbers", function() {
        expect(add('1,1,1')).toBe(3);
    });

    it("Four numbers", function() {
        expect(add('1,2,3,4')).toBe(10);
    });

    it("Random nubmers", function() {
        var rand = Math.floor(Math.random() * 10);
        var sum = 0;
        var arr = [];
        for (var i = 0; i < rand; i++) {
            var n = Math.floor(Math.random() * 100);
            sum += n;
            arr[i] = n;
        }

        expect(add(arr.join(','))).toBe(sum);

    })

})