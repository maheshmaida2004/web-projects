let array = [1, 2, 3, 4];
let i = 0;
let findNumber = 4;
let index = -1;
while (i < array.length) {
  const element = array[i];
  if (element === findNumber) {
    index = i;
  }
  i++;
}
console.log(index);
