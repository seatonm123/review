//1

function toUnderscore(string) {
    var snakeString = "";
    var stringArray = string.split('');
    for (var i = 0; i < stringArray.length; i++) {
        if (i === 0) {
            stringArray[i] = stringArray[i].toLowerCase();
            snakeString += stringArray[i];
        } else if (isNaN(stringArray[i]) && string[i] === stringArray[i].toUpperCase()) {
            stringArray[i] = "_" + stringArray[i].toLowerCase();
            snakeString += stringArray[i];
        } else {
            snakeString += stringArray[i];
        }
    }
    return snakeString;
}

// console.log(toUnderscore("This5Particular6String"));

//2

function encodeResistorColors(ohmsString) {
    let bigNum = 0.0;
    const colorObj = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "gray": 8,
        "white": 9
    };
    let ohmsArray = ohmsString.split('');
    for (var i = 0; i < ohmsArray.length; i++) {
        if (!isNaN(ohmsArray[i])) {
            bigNum += ohmsArray[i];
        } else if (ohmsArray[i] == '.') {
            console.log(ohmsArray[i]);
            for (var j = ohmsArray[i]; j < ohmsArray.length; j++) {
                while (j < ohmsArray.length + 1) {
                    bigNum += ohmsArray.length;
                }
            }
        }
    }
    // console.log(bigNum);
}

// console.log(encodeResistorColors("10 ohms"));
// console.log(encodeResistorColors("47 ohms"));
// console.log(encodeResistorColors("100 ohms"));
// console.log(encodeResistorColors("220 ohms"));
// console.log(encodeResistorColors("4.7 ohms"));
// console.log(encodeResistorColors("47k ohms"));
// console.log(encodeResistorColors("1M ohms"));


//takes positive int, returns next smaller positive integer w/ same digits

function nextSmaller(n) {
  var theHighest = 0;
  var compared = n.toString().split('').sort();if (n > 0) {
        for (var i = 0; i < n; i++) {
            var brokenDown = i.toString().split('').sort();
            if (brokenDown.join("") === compared.join("")) {
                theHighest = i;
            }
        }
      }
      if(theHighest === 0){
        return -1;
      }
      else {
        return theHighest;
      }
    }

        console.log(nextSmaller(1027));
