const fs = require("fs");

const data = fs.readFileSync("./salesData.json", "utf8");
const products = JSON.parse(data);

let totalRevinue = 0;
let totalSold = 0;
let i = 0;
let bsp = 0;
let highestRevinuePrice = 0;

products.forEach(function (product) {
  const { id, product: name, category, price, quantitySold, date } = product;
  totalRevinue += price * quantitySold;
  totalSold += quantitySold;
  if (bsp < quantitySold) {
    bsp = quantitySold;
    p = name;
  }
  if (highestRevinuePrice < price) {
    highestRevinuePrice = price;
    highestRevinueName = highestRevinuePrice * quantitySold;
    result = name;
  }
});

console.log(totalRevinue);
console.log(totalSold);
console.log("best selling price", "=>", p);

console.log(result, "-----", highestRevinueName);
