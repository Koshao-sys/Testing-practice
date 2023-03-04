function stringLength(string) {
    const len = string.length;
    if(len < 1) {
        throw new Error('String must be atleast 1 character long');
    } else if (len > 10) {
        throw new Error('String must be less than 10 characters long');
    }
    return len;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

module.exports =  { reverseString, stringLength };