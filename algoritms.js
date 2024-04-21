let input1 = document.getElementById('input').value;
let btn = document.querySelector(".btn");
let resultNumber = document.querySelector(".result");
console.log(resultNumber);

function fizbuz(input) {
    // if (typeof input !== 'number')
    //     return 'noooo number';
    if (input % 3 === 0)
        return 'Fizz'
    if (input % 5 === 0)
        return 'Buzz'
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    return input;
}
btn.addEventListener('click', function () {
    let result = fizbuz(input1);
    resultNumber.innerHTML = result;
})