function fizzBuzz(num) {
    return ((num % 3 ? '' : 'Fizz') +
            (num % 5 ? '' : 'Buzz')) ||
        String(num);
}