const { count } = require("console");
const fs = require("fs");

const data = fs.readFileSync("./salesData.json", "utf8");
const products = JSON.parse(data);
let totalRevnue = 0;
let totalUnitSold = 0;
let BestSellingProduct = 0;
let bestSellingProductName = null;
let HeightRevenueProduct = 0;
let highestRevenueProductName = null;
let categoryWiseRevenue = {};

function objToStr(obj) {
  let str = "";
  for (let key in obj) {
    const value = obj[key];
    str += `- ${key}: ₹${value}\n`;
  }
  return str;
}

function getTop(products, count) {
  let start = 0;
  let end = count - 1;
  let str = "";

  for (i = start; i <= end; i++) {
    const { product, revenue } = products.at(i);
    str += `${i + 1}. ${product} - ₹${revenue}\n`;
  }
  return str;
}

products.forEach(function (ele) {
  const { price, quantitySold, product, category } = ele;
  let revenue = price * quantitySold;
  ele.revenue = revenue;
  totalRevnue += revenue;
  totalUnitSold += quantitySold;
  if (BestSellingProduct < quantitySold) {
    BestSellingProduct = quantitySold;
    bestSellingProductName = product;
  }
  let HghRevenue = price * quantitySold;
  if (HeightRevenueProduct < HghRevenue) {
    HeightRevenueProduct = HghRevenue;
    highestRevenueProductName = product;
  }
  if (categoryWiseRevenue[category] === undefined) {
    categoryWiseRevenue[category] = 0;
  }
  categoryWiseRevenue[category] += revenue;
  products.sort(function (a, b) {
    const aRev = a.revenue;
    const bRev = b.revenue;
    //What i want
    if (aRev > bRev) return -1;
    //What i dont want
    if (aRev < bRev) return 1;
    //i dont care
    if (aRev === bRev) 0;
  });
});

const result = `
----------------------------------------
         SALES REPORT - AUG 2025
----------------------------------------
Total Revenue: ₹${totalRevnue}
Total Units Sold: ${totalUnitSold}

Best-Selling Product: ${bestSellingProductName} (${BestSellingProduct} units)
Highest Revenue Product: ${highestRevenueProductName} (₹${HeightRevenueProduct})

Category-Wise Revenue:
${objToStr(categoryWiseRevenue)}

Top 4 Products by Revenue :
${getTop(products, 4)}
----------------------------------------`;

fs.writeFileSync("output.txt", result, "utf8");
console.log("output.txt created.");
