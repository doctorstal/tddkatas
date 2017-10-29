function add(numbers) {
    var delimeterMatch = numbers.match(/(^\/\/(.*)\n)?([\s\S]*)$/);
    var delimeter = delimeterMatch && delimeterMatch[2] || /,|\n/;
    numbers = delimeterMatch[3];

    return numbers.split(delimeter).reduce(function(prev, curr) {
        return prev + parseInt(curr || 0);
    }, 0);

}