let input1 = document.getElementById('input').value;
let btn = document.querySelector(".btn");
let resultNumber = document.querySelector(".result");
console.log(resultNumber);
const speedLimits = 70;
const km_per_pont = 5;

function checkSpeed(speed) {
    let exportR = resultNumber;
    if (speed < speedLimits)
        console.log('Hammasi Yaxshi');
    else {
        let point = Math.floor((speed - speedLimits) / km_per_pont);
        if (point >= 12) {
            console.log('eeeeee');
        } else {
            exportR = point;
        }
    }
}
btn.addEventListener('click', function () {
    resultNumber.textContent = checkSpeed(input1);
})




// function fizbuz(input) {
//     // if (typeof input !== 'number')
//     //     return 'noooo number';
//     if (input % 3 === 0)
//         return 'Fizz'
//     if (input % 5 === 0)
//         return 'Buzz'
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     return input;
// }
// btn.addEventListener('click', function () {
//     let result = fizbuz(input1);
//     resultNumber.innerHTML = result;
// })