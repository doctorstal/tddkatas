function add(numbers) {
    if (numbers == '') return 0;

    return calculateArraySum(extractNumbers(numbers));

    function calculateArraySum(numArray) {
        return numArray.reduce(function(prev, curr) {
            return prev + parseInt(curr);
        }, 0);
    }

    function extractNumbers(numString) {
        var dnl = extractDelimeterAndLine(numString);
        return dnl.line.split(dnl.delimeter);
    }
}

function extractDelimeterAndLine(numbers) {
    var delimeterMatch = numbers.match(/^(\/\/(.*)\n)?([\s\S]*)$/);
    return {
        delimeter: delimeterMatch[2] || /,|\n/,
        line: delimeterMatch[3]
    }
}