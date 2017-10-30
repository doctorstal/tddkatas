function add(numbers) {
    if (numbers == '') return 0;

    var nArr = numbers.split(',');

    var res = parseInt(nArr[0]);
    if (nArr.length == 2) {
        res += parseInt(nArr[1]);
    }
    return res;
}