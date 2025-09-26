let array = [1, 2, 4, 5, 7, 5, 3, 8];
let leftElement = Number.NEGATIVE_INFINITY;
let rightElement = Number.NEGATIVE_INFINITY;
let peakElement = null;

for (i = 0; i < array.length; i++) {
  if (i == 0) {
    leftElement = Number.NEGATIVE_INFINITY;
  } else {
    leftElement = array[i - 1];
  }

  if (i == array.length - 1) {
    rightElement = Number.NEGATIVE_INFINITY;
  } else {
    rightElement = array[i + 1];
  }

  if (array[i] >= leftElement && array[i] >= rightElement) {
    peakElement = array[i];
  }
}
console.log(peakElement);
