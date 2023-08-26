module.exports = function check(str, bracketsConfig) {
  openBracketIndex = 0;
  closeBracketIndex = 0;
  result = false;
  openBrackets = [];
  closeBrackets = [];
  buffer = [];

  for(let i = 0; i < bracketsConfig.length; i++) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
  }
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
      openBracketIndex = openBrackets.indexOf(str[i]);
      if (openBracketIndex !== -1) {
        buffer.push(openBracketIndex);
        continue;
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
    
    result = true;
    return result;
}