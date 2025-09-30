let num = 222;
let origianal = num;
let i = 0;
let result = 0;
while (num > 0) {
  const digit = num % 10;

  result = result * 10 + digit;
  num = Math.floor(num / 10);
}
if (origianal === result) {
  console.log("its palindrome");
} else {
  console.log("its not a palindrome");
}
