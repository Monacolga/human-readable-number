module.exports = function toReadable (number) {
    let singles = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    number < 999 && number > 0;

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return singles[number];
    }

    if (number < 100 && number % 10 === 0) {
        return dozens[number / 10];
    }

    if (number < 100 && number % 10 !== 0) {
        return dozens[Math.floor(number / 10)] + " " + singles[number % 10];
    }

    if (number > 99 && number % 100 === 0) {
        return singles[number / 100] + " hundred";
    }

    if (number > 99 && number % 100 < 20) {
        return (
            singles[Math.floor(number / 100)] +
            " hundred" +
            " " +
            singles[number % 100]
        );
    }

    if (number > 99 && number % 100 !== 0 && number % 10 === 0) {
        return (
            singles[Math.floor(number / 100)] +
            " hundred" +
            " " +
            dozens[(number % 100) / 10]
        );
    }

    if (number > 99 && number % 100 !== 0 && number % 10 !== 0) {
        return (
            singles[Math.floor(number / 100)] +
            " hundred" +
            " " +
            dozens[Math.floor((number % 100) / 10)] +
            " " +
            singles[number % 10]
        );
    }
}