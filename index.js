// 1
   function oddOrEvenNumber(number) {
    number % 2 === 0 ? console.log('event') : console.log('odd')
}  

// 2
   function isDivisibleNumber(number1, number2) {
    (number1 % number2 === 0 || number2 % number1 === 0) &&
    (number1 !== 0 && number2 !== 0) ? console.log(1) : console.log(0)
}  

// 3
   function findTriangleAngle(angle1, angle2) {
    console.log(180 - (angle1 + angle2))
}  

// 4
   function getValue(number) {
    console.log(number + Number(`${number}${number}`) + Number(`${number}${number}${number}`))
}  

// 5
   function digitsChanging(number) {
    if (Number(number.toString().slice(number.toString().length - 1)) !== 0) {
        console.log(Number(
            number.toString().slice(number.toString().length - 1) +
            number.toString().slice(0, number.toString().length - 1)
        ))
    } else console.log(number)
}  

// 6
   function averageNumbers(number1, number2, number3, number4, number5) {
    let average = 0;
    average = (number1 + number2 + number3 + number4 + number5) / 5
    console.log(average)
}  

// 7
   function isMultipleNumber(number) {
    let message = `${number} is a multiple of `;
    let number1 = 3;
    let number2 = 5;
    let number3 = 7;

    if (number % number1 !== 0 && number % number2 !== 0 && number % number3 !== 0) {
        message = `${number} is not a multiple of ${number1}, ${number2} or ${number3}`;
    } else {
        if (number % number1 === 0) {
            message += number1
        }
        if (number % number2 === 0) {
            message += message.includes(` ${number1}`) ? ' and ' + number2 : number2
        }

        if (number % number3 === 0) {
            if (!message.includes(` ${number1}`) && !message.includes(` ${number2}`)) {
                message += number3
            } else if (message.includes(` ${number1}`) && !message.includes(` ${number2}`)
                || message.includes(` ${number2}`) && !message.includes(` ${number1}`)) {
                message += number1 || number2 ? ' and ' + number3 : number3
            } else if (message.includes(` ${number1}`) && message.includes(` ${number2}`)) {
                message = `${number} is a multiple of ${number1}, ${number2} and ${number3}`;
            }
        }
    }
    console.log(message)
}  

// 8
   function getAge(age, yearOrMonth) {
    if (yearOrMonth === 'months') {
        console.log('baby')
    } else if (yearOrMonth === 'years') {
        if (age >= 1 && age <= 2) {
            console.log('toddler')
        } else if (age >= 3 && age <= 12) {
            console.log('child')
        } else if (age >= 13 && age <= 17) {
            console.log('teenager')
        } else if (age >= 18) {
            console.log('adult')
        }
    } else {
        console.log('put argument years or months')
    }
}  

// 9

   function sortNumbers(number1, number2, number3) {
    const numbers = [number1, number2, number3];

    for (let index = 0; index < numbers.length; index++) {
        for (let subIndex = 0; subIndex < numbers.length; subIndex++) {
            if (numbers[index] < numbers[subIndex]) {
                let c = numbers[index];
                numbers[index] = numbers[subIndex];
                numbers[subIndex] = c
            }
        }
    }
}  

// 10
// function examResult(mark1, mark2, mark3) {
//     if (mark1 < 40 && mark2 < 40 || mark1 < 40 && mark3 < 40 || mark2 < 40 && mark3 < 40) {
//         console.log('Not passed')
//     } else {
//         (mark1 + mark2 + mark3) / 3 >= 50 ? console.log('Passed') : console.log('Not passed')
//     }
// }

// 11
   function signOfProduct(number1, number2, number3) {
    if (number1 === 0 || number2 === 0 || number3 === 0) {
        console.log('unsigned')
    } else {
        number1 * number2 * number3 > 0 ? console.log('+') : console.log('-')
    }
}  

// 12
   function quadraticEquation(a, b, c) {
    let squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let x1 = (-b + squareRoot) / (2 * a);
    let x2 = (-b - squareRoot) / (2 * a);
    if (a === 0 || b === 0 || c === 0) {
        console.log('Enter valid constants')
    } else {
        if (squareRoot >= 0) {
            x1 === x2 ? console.log(`Solution is ${x1}`) : console.log(`Solutions are ${x1} and ${x2}`)
        } else {
            console.log(`Solution does not exists`)
        }
    }
}  

// 13
   var n = +prompt();
var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
        i += 1
}

if (n % 3 === 0 && n % 10 === 1) {
        j += 1
}  

// 14
   function isContainsInNumber(digit, number) {
    let answer = 'No';
    for (let i = 0; i < number.toString().length; i++) {
        if (digit === Number(number.toString()[i])) {
            answer = 'Yes';
        }
    }
    console.log(answer)
}  

// 15
   function reverseDigits(number) {
    if (Number(number.toString().slice(number.toString().length - 1)) !== 0) {
        console.log(Number(
            number.toString().slice(number.toString().length - 1) +
            number.toString().slice(1, number.toString().length - 1) +
            number.toString().slice(0, 1))
        )
    } else {
        console.log(Number(
            number.toString().slice(number.toString().length - 1) +
            number.toString().slice(1, number.toString().length - 1) +
            number.toString().slice(0, 1))
        )
    }
}  

// 16
   function getSquare(rectangleOrTriangle, side1, side2) {
    if (side1 > 0 && side1 > 0) {
        if (rectangleOrTriangle === 'triangle') {
            console.log(`Square of the ${rectangleOrTriangle} is ${(side1 * side2) / 2}`)
        } else if (rectangleOrTriangle === 'rectangle') {
            console.log(`Square of the ${rectangleOrTriangle} is ${side1 * side2}`)
        } else {
            console.log('Putting true arguments')
        }
    } else {
        console.log('Please enter only positives')
    }
}  

// 17
   function findDifference(number) {
    let minValue = Number(number.toString()[0]);
    let maxValue = Number(number.toString()[0]);
        for (let index = 0; index < number.toString().length; index++) {
                if (minValue > Number(number.toString()[index])) {
                    minValue = Number(number.toString()[index])
                }
                if (maxValue < Number(number.toString()[index])) {
                    maxValue = Number(number.toString()[index])
                }
        }
    console.log(maxValue - minValue)
}  

// 17(2)
   function isPrimeNumber(number) {
    let isPrime = 'Yes';
    let numbers = range(3, number)
    if(number === 3) {
        isPrime = 'Yes'
    } else {
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] % 2 !== 0) {
                for (let subIndex = 0; subIndex < Math.sqrt(numbers.length); subIndex++) {
                    if (number % numbers[subIndex] === 0) {
                        isPrime = 'No';
                    }
                }
            }
        }
    }
    console.log(isPrime)
}

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}  

// 18
   function lastFibonacciNumber(number) {
    let numbers = [0, 1];
    for (let i = 0; i < number - 1; i++) {
        numbers.push(numbers[i] + numbers[i + 1])
    }
    console.log(numbers[number])
}  

// 19
   function fibonacciNumbers(number) {
    let numbers = [0, 1];
    for (let i = 0; i < number; i++) {
        if (numbers[i] + numbers[i + 1] < number) {
            numbers.push(numbers[i] + numbers[i + 1])
        }
    }
    console.log(numbers)
}  

// 20
   function isDivisible(number) {
    let sum = 0;
    let product = 1;
    if (number === 0) {
        console.log('Cannot calculate')
    } else {
        for (let i = 0; i < number.toString().length; i++) {
            sum += Number(number.toString()[i]);
            product *= Number(number.toString()[i]);
        }

        product % sum === 0 ? console.log(`Quotient is ${product / sum}`) : console.log(`Reminder is ${product % sum}`)
    }
}  

// 21
   function intervalInNumbers(number1, number2, arrLength) {
    let numbers = [number1];
    let interval = 0;
    let intervalNumbers = number1;
    if (arrLength > 2) {
        for (let i = 0; i < arrLength - 2; i++) {
            interval = (number2 - number1) / (arrLength - 1);
            intervalNumbers += interval;
            numbers.push(intervalNumbers.toString().length < 3 ? intervalNumbers : intervalNumbers.toFixed(1))
        }
    }
    if (arrLength > 1) {
        numbers.push(number2);
    }
    console.log(numbers)
}  

// 22
   function getSecondMaxElement(numbers) {
    let maxValue = numbers[0];
    let secondMaxValueIndex = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (maxValue < numbers[i]) {
            maxValue = numbers[i];
        }
    }
    numbers.splice(numbers.indexOf(maxValue),1)
    for (let i = 0; i < numbers.length; i++) {
        if (secondMaxValueIndex < numbers[i]) {
            secondMaxValueIndex = numbers[i];
        }
    }
    console.log(secondMaxValueIndex)
}  

// 23
function repeatPadAmount(numbers, padAmount, repeat) {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i < padAmount) {
            arr.push(numbers[i])
        }
    }

    const arrLength = (arr.length * repeat) - arr.length;

    if (repeat > 1) {
        for (let i = 0; i < arrLength; i++) {
            arr.push(arr[i])
        }
    }

    arr = arr.concat(numbers);

    for (let i = numbers.length - padAmount; i < numbers.length; i++) {
        arr2.push(numbers[i])
    }

    const arr2Length = (arr2.length * repeat) - arr2.length;

    for (let i = 0; i < arr2Length; i++) {
        arr2.push(arr2[i])

    }

    arr = arr.concat(arr2);
    arr.includes(undefined) ? console.log('Invalid padding amount') : console.log(arr)
}
