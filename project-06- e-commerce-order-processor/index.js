const fs = require("fs");
const data = fs.readFileSync("./ecommerceData.json", "utf-8");
const ecommerceData = JSON.parse(data);

let totalRevenue = 0;
let totalOrders = 0;
let revenueByCustomer = {};
let revenueByCategory = {};
let orderByStatus = {};

function revenueFoundByObj(obj, key, value) {
  if (obj[key] === undefined) {
    obj[key] = 0;
  }
  obj[key] += value;
}

ecommerceData.forEach(function (customerData) {
  let count = 1;
  const { customer, items, status, orderId } = customerData;
  items.forEach(function (itemsDetails) {
    const { price, quantity, category } = itemsDetails;
    const itemRevenue = quantity * price;
    totalRevenue += itemRevenue;

    revenueFoundByObj(revenueByCustomer, customer, itemRevenue);
    revenueFoundByObj(revenueByCategory, category, itemRevenue);
  });
  revenueFoundByObj(orderByStatus, status, count);
});

console.log(revenueByCustomer);
console.log(revenueByCategory);
console.log(orderByStatus);

// console.log(Object.keys(revenueByCustomer).length);
