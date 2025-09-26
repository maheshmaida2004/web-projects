function checkArraysEqual(first, second) {
  let frequencyA = {};
  let frequencyB = {};
  for (let i = 0; i < first.length; i++) {
    const elementA = first[i];
    if (frequencyA[elementA] === undefined) frequencyA[elementA] = 0;
    frequencyA[elementA]++;

    const elementB = second[i];
    if (frequencyB[elementB] === undefined) frequencyB[elementB] = 0;
    frequencyB[elementB]++;
  }

  for (let key in frequencyA) {
    if (frequencyA[key] !== frequencyB[key]) {
      return false;
    }
  }

  //
  for (let key in frequencyB) {
    if (frequencyB[key] !== frequencyA[key]) {
      return false;
    }
  }
  return true;
}

let first = [1, 2, 3, 4, 5];
let second = [1, 2, 3, 4, 5];
console.log(checkArraysEqual(first, second));
