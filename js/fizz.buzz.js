function fizzBuzz(number) {
    return ((number % 3 ? '' : 'Fizz') +
            (number % 5 ? '' : 'Buzz')) ||
            String(number);
}