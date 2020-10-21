module.exports = function toReadable(number) {
    let unitsNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    let teenNumber = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    }

    let tensNumber = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let string = '';




    if (!number) {
        return 'zero';
    } else {
        number = number.toString();

        if (number.length === 1) {
            string = unitsNumber[number];
            return string;
        } else if (number.length === 2) {
            if (number[0] > 1) {
                let x = +number[1];
                switch (x) {
                    case 0:
                        return string = tensNumber[number[0]];
                    default:
                        return string = tensNumber[number[0]] + ' ' + unitsNumber[number[1]];
                }
                return string;
            } else {
                string = teenNumber[number[1]];
                return string;
            }
        } else if (number.length === 3) {
            /*100-900 only hundred numbers*/
            if (number[1] == 0 && number[2] == 0) {
                return string = unitsNumber[number[0]] + ' ' + 'hundred';
                /*101-909 only units numbers  */
            } else if (number[1] == 0 && number[2] > 0) {
                return string = unitsNumber[number[0]] + ' ' + 'hundred' + ' ' + unitsNumber[number[2]];
                /*120-990 only round tens numbers */
            } else if (number[1] > 1 && number[2] == 0) {
                return string = unitsNumber[number[0]] + ' ' + 'hundred' + ' ' + tensNumber[number[1]];
                /*110 - 919 only teen numbers */
            } else if (number[1] == 1 && number[2] >= 0) {
                return string = unitsNumber[number[0]] + ' ' + 'hundred' + ' ' + teenNumber[number[2]];
                /*111-999 all numbers*/
            } else {
                return string = unitsNumber[number[0]] + ' ' + 'hundred' + ' ' + tensNumber[number[1]] + ' ' + unitsNumber[number[2]];
            }
        } else {
            return;
        }
    }
}