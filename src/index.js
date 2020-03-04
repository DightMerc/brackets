module.exports = function check(str, bracketsConfig) {
    let bracketsConfigLength = bracketsConfig.length;

    for (let i = 0; i < bracketsConfigLength;) {
        let brackets = bracketsConfig[i].join('');

        if (str.includes(brackets)) {
            str = str.replace(brackets, '');
            i= 0;
        } else {
            i++;
        }
    }

    let result = str.length ? false : true;

    return result;
}
