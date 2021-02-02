function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('');
    let array = [];
    for (let i of words){
      let sorted = i.split('').sort().join('');
      if (sorted === sortedWord){
        array.push(i);
      }
    }
    return array;
  }