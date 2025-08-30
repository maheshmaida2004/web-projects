// const fs = require("fs");

// const data = fs.readFileSync("./salesData.json", "utf8");
// const products = JSON.parse(data);

// function objToStr(obj) {
//   let str = "";
//   for (key in obj) {
//     str += `${key} : ${obj[key]}\n`;
//   }
//   return str;
// }
// let categoryWiseRev = {};
// products.forEach(function (product) {
//   const { id, product: name, category, price, quantitySold, date } = product;
//   const revenue = product.price * product.quantitySold;

//   if (categoryWiseRev[category] === undefined) {
//     categoryWiseRev[category] = 0;
//   }
//   categoryWiseRev[category] += revenue;

// });

// console.log(objToStr(categoryWiseRev));
// function getTop(products, count) {
//   const start = 0;
//   const end = count - 1;

//   let str = "";
//   for (let i = start; i <= end; i++) {
//     const { product, revenue } = products.at(i);
//     str += `${product} - ${revenue}\n`;
//   }
//   return str;
// }

// products.forEach(function (product) {
//   const { id, product: name, category, price, quantitySold, date } = product;
//   const revenue = price * quantitySold;
//   product.revenue = revenue;
// });

// products.sort(function (a, b) {
//   const revenueA = a.revenue;
//   const revenueB = b.revenue;

//   //what do you want
//   if (revenueA > revenueB) return -1;
//   //what you don't want
//   if (revenueA < revenueB) return 1;
//   //you don't care
//   if (revenueA === revenueB) return 0;
// });
// console.log(products);
// console.log(getTop(products, 4));

const fs = require("fs");

const data = fs.readFileSync("./salesData.json", "utf8");
const products = JSON.parse(data);

function objTostr(obj) {
  let str = "";
  for (key in obj) {
    str += `${key} : ${obj[key]}\n`;
  }
  return str;
}

let emptyobj = {};

products.forEach(function (product) {
  const { id, product: name, category, price, quantitySold, date } = product;
  const revenue = price * quantitySold;

  if (emptyobj[category] === undefined) {
    emptyobj[category] = 0;
  }
  emptyobj[category] += revenue;
});
console.log(objTostr(emptyobj));
