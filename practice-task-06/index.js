const { count } = require("console");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
const custmerData = JSON.parse(data);
function appendtext(data) {
  fs.appendFileSync("output.txt", data, "utf-8");
}
let totalRevenue = 0;
let totalOrders = 0;
let uniqueCustomer = {};
let custmerWiseRevenue = {};
let catagortWiseRevenue = {};
let orderByStatus = {};
custmerData.forEach(function (products) {
  const { customer, items, status } = products;
  items.forEach(function (item) {
    const { category, price, quantity } = item;
    const revenue = price * quantity;

    totalRevenue += revenue;
    totalOrders = custmerData.length;

    if (uniqueCustomer[customer] === undefined) {
      uniqueCustomer[customer] = { name: customer, count: 0 };
    }
    uniqueCustomer[customer].count++;

    if (custmerWiseRevenue[customer] === undefined) {
      custmerWiseRevenue[customer] = { name: customer, salary: 0 };
    }
    custmerWiseRevenue[customer].salary += revenue;
    if (catagortWiseRevenue[category] === undefined) {
      catagortWiseRevenue[category] = { name: category, salary: 0 };
    }
    catagortWiseRevenue[category].salary += revenue;
  });
  if (orderByStatus[status] === undefined) {
    orderByStatus[status] = { name: status, count: 0 };
  }
  orderByStatus[status].count++;
});

let unique = Object.keys(uniqueCustomer).length;
appendtext(`
    "Total Revenue: ${totalRevenue}
    "Unique Customers: ${unique}
    "Total Orders:${totalOrders}\n
    `);

function revenueastrToObj(custmerWiseRevenue) {
  for (let key in custmerWiseRevenue) {
    appendtext(`${key}:${custmerWiseRevenue[key].salary}\n`);
  }
}

function revenueCustmerWise(catagortWiseRevenue) {
  for (let key in catagortWiseRevenue) {
    appendtext(`${key}= ${catagortWiseRevenue[key].salary}\n`);
  }
}

function orderWise(orderByStatus) {
  for (let key in orderByStatus) {
    appendtext(` ${key} = ${orderByStatus[key].count}\n`);
  }
}

revenueastrToObj(custmerWiseRevenue);
revenueCustmerWise(catagortWiseRevenue);
orderWise(orderByStatus);
