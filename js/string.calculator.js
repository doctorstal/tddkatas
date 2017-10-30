function add(numbers) {
    if (numbers == '') return 0;

    var nArr = extractNumbers();

    return nArr.reduce(function(prev, curr) {
        return prev + parseInt(curr);
    }, 0);

    function extractNumbers() {
        var dnl = extractDelimeterAndLine(numbers);
        return dnl.line.split(dnl.delimeter);
    }
}

function extractDelimeterAndLine(numbers) {
    var delimeterMatch = numbers.match(/^(\/\/(.*)\n)?([\s\S]*)$/);
    return delimeterMatch && {
        delimeter: delimeterMatch[2] || /,|\n/,
        line: delimeterMatch[3]
    }
}