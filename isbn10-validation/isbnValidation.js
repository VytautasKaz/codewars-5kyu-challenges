function validISBN10(isbn) {
    if (isbn.length !== 10){
      return false;
    }
    
    let isbnSplit = isbn.split('');
    let isbnToArrayOfInts = isbnSplit.map(x => +x);
    let sum = 0;
    
    for (let i = 0; i < isbnToArrayOfInts.length - 1; i++){
        if (isNaN(isbnToArrayOfInts[i])){
            return false;
        }
    }
    
    if (isbnSplit[9] === 'X' || isbnSplit[9] === 'x'){
        isbnSplit[9] = '10';
    }
    
    for (let j = 0; j < isbnSplit.length; j++){
      sum += (isbnSplit[j] * (j + 1));
    }
      
     if (sum % 11 !== 0){
         return false;
     }
    
      return true;
  }