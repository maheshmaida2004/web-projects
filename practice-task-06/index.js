const fs = require("fs");
const jsonData = fs.readFileSync("./data.json", "utf-8");
const objData = JSON.parse(jsonData);

const appendText = function (text) {
  fs.appendFileSync("output.txt", text, "utf-8");
};

let totalRevenue = 0;
let totalOrders = objData.length;
let orderCountByStatus = {};
let revenueByCustomers = {};
let revenueByCategory = {};

const appendObj = function (obj, formatStr) {
  for (let key in obj) {
    let str = formatStr;
    str = str.replaceAll("#key", key);
    str = str.replaceAll("#value", obj[key]);
    appendText(str);
  }
};

const addValueToObj = function (obj, key, value) {
  if (obj[key] === undefined) obj[key] = 0;
  obj[key] += value;
};

objData.forEach(function (order) {
  const { customer, items, status } = order;
  addValueToObj(orderCountByStatus, status, 1);
  let orderRevenue = 0;
  items.forEach(function (product) {
    const { product: name, category, price, quantity } = product;
    const itemRevnue = price * quantity;
    totalRevenue += itemRevnue;
    orderRevenue += itemRevnue;
    addValueToObj(revenueByCategory, category, itemRevnue);
  });
  addValueToObj(revenueByCustomers, customer, orderRevenue+);
});

appendText(`
-----------------------------------------
         E-COMMERCE ORDER REPORT
-----------------------------------------
`);

appendText(`
Total Revenue: ₹${totalRevenue}
Total Orders: ${totalOrders}
Unique Customers: ${Object.keys(revenueByCustomers).length}
`);

appendText(`\nRevenue by Customer:\n`);
appendObj(revenueByCustomers, `- #key: ₹#value\n`);
appendText(`\nRevenue by Category:\n`);
appendObj(revenueByCategory, `- #key: ₹#value\n`);
appendText(`\nOrders by Status:\n`);
appendObj(orderCountByStatus, `- #key: #value\n`);
