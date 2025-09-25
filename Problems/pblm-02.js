let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5];

let i = 0;
let m = 0;
while (i < a.length) {
  while (m < b.length) {
    if (a[i].length === b[m].length) {
      return true;
    }
    m++;
  }
  i++;
}
