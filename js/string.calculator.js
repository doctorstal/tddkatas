function add(numbers) {
    if (numbers == '') return 0;

    var nArr = numbers.split(',');
    if (nArr.length == 1) {
        return parseInt(nArr[0]);
    } else {
        return parseInt(nArr[0]) + parseInt(nArr[1]);
    }
}