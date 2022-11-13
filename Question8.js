const palindromeChecker = (str) => {
  let regexFn = /[\W_]/g;
  let newStr = str.toLowerCase().replace(regexFn, '');
  str = newStr.split('');
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str.join('');
}

console.log(palindromeChecker('race car'))