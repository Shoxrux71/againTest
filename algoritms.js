function fizbuz(input) {
    if (typeof input !== 'number')
        return 'noooo number';
    if (input % 3 === 0)
        return 'Fizz'
    if (input % 5 === 0)
        return 'Buzz'
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    return input;
}
let result = fizbuz('sdsd');
console.log(result);