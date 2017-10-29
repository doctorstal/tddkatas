function add(numbers) {
    return numbers.length == 0 ?
        0 :
        addNumbers(numbers);
}

function addNumbers(numbers) {
    if (numbers.indexOf(',') == -1) {
        return parseInt(numbers);
    }
    var arr = numbers.split(',');
    return parseInt(arr[0]) + parseInt(arr[1]);
}