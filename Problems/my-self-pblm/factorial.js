let getFactorial = function (num) {
  let i = 1;
  let factNumber = 1;
  while (i <= num) {
    factNumber = factNumber * i;
    i++;
  }
  return factNumber;
};

const result = getFactorial(12);
console.log(result);
