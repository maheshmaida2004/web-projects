const fs = require("fs");

const data = fs.readFileSync("./salesData.json", "utf8");
const products = JSON.parse(data);

let revenue = 0;
let totalSold = 0;

let bsp = 0;
let highestRevinuePrice = 0;

function objTostr(obj) {
  let str = "";
  for (key in obj) {
    str += `-${key} : ₹${obj[key]}\n`;
  }
  return str;
}

function getTop(products, count) {
  const start = 0;
  const end = count - 1;
  let str = "";
  for (i = start; i <= end; i++) {
    const { product, revenue } = products.at(i);
    str += `${product} - ₹${revenue}\n`;
  }
  return str;
}

let emptyobj = {};

products.forEach(function (product) {
  const { id, product: name, category, price, quantitySold, date } = product;
  revenue += price * quantitySold;
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

  if (emptyobj[category] === undefined) {
    emptyobj[category] = 0;
  }
  emptyobj[category] += revenue;

  products.sort(function (a, b) {
    const revenue = price * quantitySold;
    product.revenue = revenue;
    const revenueA = a.revenue;
    const revenueB = b.revenue;
    //what do you want
    if (revenueA > revenueB) return -1;
    //what you don't want
    if (revenueA < revenueB) return 1;
    //you don't care
    if (revenueA === revenueB) return 0;
  });
});

const res = `
----------------------------------------
         SALES REPORT - AUG 2025
----------------------------------------
Total Revenue: ₹${revenue}
Total Units Sold: ${totalSold}

Best-Selling Product: ${p} (${bsp} units)
Highest Revenue Product: ${highestRevinueName} (₹${highestRevinuePrice})

Category-Wise Revenue:
${objTostr(emptyobj)}

Top 3 Products by Revenue:
${getTop(products, 4)}
----------------------------------------`;

fs.writeFileSync("output.txt", res, "utf8");
console.log("output.txt created.");
