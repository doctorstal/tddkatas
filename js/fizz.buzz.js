function fizzBuzz(num) {
    var res = '';
    if (num % 3 == 0) res += 'Fizz';
    if (num % 5 == 0) res += 'Buzz';
    if (res.length == 0) res = String(num);
    return res;
}