function sumPairs(ints, s) {
    let set = new Set();
    for (let i = 0; i < ints.length; i++){
      if (set.has(s - ints[i])){ 
        return [s - ints[i], ints[i]];
      }
      set.add(ints[i]);
    }
  }