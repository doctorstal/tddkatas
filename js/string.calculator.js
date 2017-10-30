function add(numbers) {
    var numArray = extractNumbers(numbers);
    checkArray(numArray);
    return calculateArraySum(numArray);

    function extractNumbers(numString) {
        var dnl = extractDelimeterAndLine(numString);
        return dnl.line.length && dnl.line.split(dnl.delimeter) ||
            [0];
    }

    function checkArray(numArray) {
        var negatives = numArray.filter(function(value) { return value < 0 });
        if (negatives.length) throw new Error('Negatives are not allowed. [' + negatives.join(', ') + ']');
    }

    function calculateArraySum(numArray) {
        return numArray.reduce(function(prev, curr) {
            return prev + parseInt(curr);
        }, 0);
    }


}

function extractDelimeterAndLine(numbers) {
    var delimeterMatch = numbers.match(/^(\/\/(.*)\n)?([\s\S]*)$/);
    return {
        delimeter: delimeterMatch[2] || /,|\n/,
        line: delimeterMatch[3]
    }
}