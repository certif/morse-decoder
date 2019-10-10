const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let textDecode = "";
    while (expr.length >= 10) {
        var tempArr = expr.slice(0, 10);
        tempArr = tempArr.replace(/00/g, "");
        tempArr = tempArr.replace(/10/g, ".");
        tempArr = tempArr.replace(/11/g, "-");
        tempArr = tempArr.replace("**********", " ");
        if (tempArr !== " ") {
            textDecode += MORSE_TABLE[tempArr]
            } else {
            textDecode += " ";
            }
        expr = expr.slice(10);
    }
    return textDecode;
}

module.exports = {
    decode
}