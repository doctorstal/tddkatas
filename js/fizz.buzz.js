function fizzBuzz(number) {
    var res = ''
    if (number % 3 == 0) res += 'Fizz';
    if (number % 5 == 0) res += 'Buzz';
    return res || number.toString();
}