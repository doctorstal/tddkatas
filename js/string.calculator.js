function add(numbers) {
    if (numbers == '') return 0;

    var nArr = extractNumbers();

    return nArr.reduce(function(prev, curr) {
        return prev + parseInt(curr);
    }, 0);

    function extractNumbers() {
        return numbers.split(/,|\n/);
    }
}