function fizzBuzz(number) {
    return (number % 3 == 0 ? 'Fizz' : '')
        + (number % 5 == 0 ? 'Buzz' : '')
        || number.toString();
}