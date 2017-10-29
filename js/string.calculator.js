function add(numbers) {
    return numbers.split(/,|\n/).reduce(function(prev, curr) {
        return prev + parseInt(curr || 0);
    }, 0);
}