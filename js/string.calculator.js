function add(numbers) {
    if (numbers == '') return 0;

    return calculateArraySum(extractNumbers(numbers));

    function calculateArraySum(numArray) {
        checkArray(numArray);
        return numArray.reduce(function(prev, curr) {
            return prev + parseInt(curr);
        }, 0);
    }

    function checkArray(numArray) {
        var negatives = numArray.filter(function(value) { return value < 0 });
        if (negatives.length) throw new Error('Negatives are not allowed. [' + negatives.join(', ') + ']');
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