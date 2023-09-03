module.exports = function check(str, bracketsConfig) {

  let openBracketIndex = 0;
  let closeBracketIndex = 0;
  let result = false;
  let openBrackets = [];
  let closeBrackets = [];
  let buffer = [];

  for(let i = 0; i < bracketsConfig.length; i++) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
  }
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
      openBracketIndex = openBrackets.indexOf(str[i]);
      if (openBracketIndex !== -1) {
        buffer.push(openBracketIndex);
      }
      closeBracketIndex = closeBrackets.indexOf(str[i]);
      if (closeBracketIndex !== -1) {
        openBracketIndex = buffer.pop();
        if (closeBracketIndex !== openBracketIndex) {
          return result;
        }
      }
    }
    if (buffer.length !== 0) {
      return result;
    }
    return result = true;
}