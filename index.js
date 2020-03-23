// 1
function printXStar(starsAmount) {
    let str = '';
    let spaceCount = (starsAmount - 1);
    let letter = '';
    let spaceCount2 = 0;

    for (let k = starsAmount; k > 1; k--) {
        letter = ' '.repeat(spaceCount2) + '*' + (k > 1 ? ' '.repeat((2 * k) - 3) : '') + (k > 1 ? '*' : '');
        console.log(letter);
        spaceCount2++;
    }

    for (let i = 1; i <= starsAmount; i++) {
        str = ' '.repeat(spaceCount) + '*' + (i > 1 ? ' '.repeat((2 * i) - 3) : '') + (i > 1 ? '*' : '');
        console.log(str);
        spaceCount--;
    }
}


// 2
function frequencyNumber(numbers) {
    numbers.sort();
    let current = '';
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== current) {
            if (count > 0) {
                console.log(`${current}: ${count / numbers.length}`);
            }
            current = numbers[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        console.log(`${current}: ${count / numbers.length}`);
    }
}

// 3
function getNumberAndString(numbers) {
    let numberCount = 0;
    let stringCount = 0;
    let result = '';
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            numberCount++
        }

        if (typeof numbers[i] === 'string') {
            stringCount++
        }
    }
    console.log(`Numbers: ${numberCount}, Strings: ${stringCount}`)
}

// 4
function getLargestWord(sentence) {
    let arr = [];
    let spaceIndex = 0;
    let maxLengthWord = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' && spaceIndex !== i) {
            arr.push(sentence.substring(spaceIndex, i));
            spaceIndex = i;
        }
    }
    arr.push(sentence.substring(spaceIndex, sentence.length));

    for (let i = 0; i < arr.length; i++) {
        if (maxLengthWord.length <= arr[i].length) {
            maxLengthWord = arr[i]
        }
    }
    console.log(maxLengthWord)
}

// 5
function getLongestSubstring(sentence) {
    sentence = sentence.toLowerCase();
    let maxLengthLetter = '';

    for (let i = 0; i < sentence.length; i++) {
        let arr = [];
        for (let k = i; k < sentence.length; k++) {
            if (arr.join('').replace(/ /g, '').indexOf(sentence[k]) !== -1) {
                break
            }
            arr.push(sentence[k])
        }

        if (maxLengthLetter.length <= arr.length) {
            maxLengthLetter = arr.join('')
        }
    }
    console.log(maxLengthLetter)
}

// 6
function replaceFirstCharToNextTwo(sentence) {
    let letter = sentence;
    let str = '';
    let replaceSentence = '';
    let m = 0;

    for (let i = 0; i < sentence.length; i += 3) {
        if (sentence.length % 2 !== 0) {
            letter = letter.replace(sentence[i], '')
        } else {
            if (i < sentence.length - 2) {
                letter = letter.replace(sentence[i], '')
            }
        }
    }

    for (let i = 0; i < letter.length; i += 2) {
        str = letter.substring(i, i + 2) + sentence[m];
        replaceSentence += str;
        m += 3
    }

    if (sentence.length % 2 === 0) {
        replaceSentence = replaceSentence.substring(0, replaceSentence.length - 1)
    }

    console.log(replaceSentence)
}

// 7
function getNumbersProduct(numbers) {
    let isNegativeNumber = false;
    let maxNegativeNumber = 1;
    let err = '';

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "object") {
            for (let k = 0; k < numbers[i].length; k++) {
                if (numbers[i][k] < 0) {
                    isNegativeNumber = true;
                }
            }
        } else {
            err = 'Invalid Argument';
            isNegativeNumber = true;
        }

        if (getMaxNegative(numbers[i]) !== undefined) {
            maxNegativeNumber *= getMaxNegative(numbers[i])
        }
    }

    if (isNegativeNumber === false) {
        err = 'No negatives'
    }
    err === '' ? console.log(maxNegativeNumber) : console.log(err)
}

function getMaxNegative(nums) {
    let negativeNumbers = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeNumbers.push(nums[i])
        }
    }
    if (Math.max(...negativeNumbers) !== -Infinity) {
        return Math.max(...negativeNumbers)
    }
}

// 8
function getSubsets(numbers) {
    let arr = [];
    let m = 0;

    if (numbers.length > 3) {
        for (let i = 0; i < numbers.length; i++) {
            for (let k = i + 1; k < numbers.length; k++) {
                for (let j = k + 1; j < numbers.length; j++) {
                    arr[m] = [];
                    arr[m].push(numbers[i]);
                    arr[m].push(numbers[k]);
                    arr[m].push(numbers[j]);
                    m++
                }
            }
        }
        console.log(arr)
    } else {
        console.log(numbers)
    }
}
