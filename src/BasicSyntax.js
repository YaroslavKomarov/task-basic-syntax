export function romanToInteger(str) {
    let result = 0;

    const digits = {
        Z: 2000,
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let romanNum = '';
    for (var i = 0; i < str.length; i++) {
        if (digits[romanNum + str[i]] === undefined) {
            result += digits[romanNum];
            romanNum = '';
        }
        romanNum += str[i];
    }
    return result + digits[romanNum];
}
