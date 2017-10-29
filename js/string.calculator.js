function add(numbers) {
    return numbers.length == 0 ?
        0 :
        addNumbers(numbers);
}

function addNumbers(numbers) {
    var arr = numbers.split(',');
    var res = parseInt(arr[0]);
    if (arr.length == 2) res += parseInt(arr[1]);
    return res;
}