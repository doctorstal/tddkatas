function fizzBuzz(number) {
    checkArguments();
    return getFizzBuzzString() || number.toString();

    function checkArguments() {
        if (number <= 0)
            throw new Error('Numbers less than zero is not supported.');
    }

    function getFizzBuzzString() {
        var res = '';
        if (number % 3 == 0) res += 'Fizz';
        if (number % 5 == 0) res += 'Buzz';
        return res;
    }
}