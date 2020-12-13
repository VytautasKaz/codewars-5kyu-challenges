let moveZeros = function (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        continue;
      } else {
        newArray.push(arr[i]);
      }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 0){
            newArray.push(arr[j]);
        }
    }
    return newArray;
  }