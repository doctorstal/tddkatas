function add(numbers) {
    return numbers.length == 0 ?
        0 :
        addNumbers(numbers);
}

function addNumbers(numbers) {
    var arr = numbers.split(',');
    return arr.reduce(function(prev, curr) {
        return prev + parseInt(curr);
    }, 0);
}