function toUnderscore(string) {
  var snakeString = "";
  var stringArray = string.split('');
  for(var i = 0; i < stringArray.length; i++){
    if(i === 0){
      stringArray[i] = stringArray[i].toLowerCase();
      snakeString += stringArray[i];
    }
    else if(string[i] === stringArray[i].toUpperCase()){
      stringArray[i] = "_" + stringArray[i].toLowerCase();
      snakeString += stringArray[i];
    }
    else {
      snakeString += stringArray[i];
    }
  }
  return snakeString;
}

console.log(toUnderscore("ThisParticularString"));
