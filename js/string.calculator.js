function add(numbers) {
    if (numbers == '') return 0;

    var nArr = numbers.split(',');

    return nArr.reduce(function(prev, curr) {
        return prev + parseInt(curr);
    }, 0);
}