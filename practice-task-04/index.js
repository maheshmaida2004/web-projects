const fs = require("fs");

const data = fs.readFileSync("./marketData.json", "utf8");
const marketData = JSON.parse(data);

let clickThroughRate = 0;
let conversionsRate = 0;
let returnOnInvestment = 0;
let parRevenue = 0;
let parCost = 0;
let overAllSpend = 0;
let totalRevenue = 0;
let overAllROI = 0;
let bestPerformingCampegin = marketData[0].revenue;
let bestPerformingCampeginName = marketData[0].campaignName;
let neddingOptimizeCampeign = marketData[0].revenue;
let neddingOptimizeCampeignName = marketData[0].campaignName;

function getBestPerforming(revenue, campaignName) {
  if (bestPerformingCampegin < revenue) {
    bestPerformingCampegin = revenue;
    bestPerformingCampeginName = campaignName;
  }
}
function getNeddingOptimize(revenue, campaignName) {
  if (neddingOptimizeCampeign > revenue) {
    neddingOptimizeCampeign = revenue;
    neddingOptimizeCampeignName = campaignName;
  }
}

marketData.forEach(function (campeignData) {
  const { id, impressions, clicks, conversions, cost, revenue, campaignName } =
    campeignData;
  clickThroughRate = (clicks / impressions) * 100;
  conversionsRate = (conversions / clicks) * 100;
  returnOnInvestment = ((revenue - cost) / cost) * 100;
  parRevenue = revenue;
  parCost = cost;
  overAllSpend += cost;
  totalRevenue += revenue;
  overAllROI = ((totalRevenue - overAllSpend) / overAllSpend) * 100;
  getBestPerforming(revenue, campaignName);
  getNeddingOptimize(revenue, campaignName);

  console.log("CTR", ":", clickThroughRate.toFixed(2) + "%");
  console.log("Conversion Rate", ":", conversionsRate.toFixed(2) + "%");
  console.log("ROI Rate", ":", returnOnInvestment.toFixed(2) + "%");
  console.log(
    parRevenue.toLocaleString("en-IN"),
    parCost.toLocaleString("en-IN")
  );
});
console.log(" ₹", overAllSpend.toLocaleString("en-IN"));
console.log(" ₹", totalRevenue.toLocaleString("en-IN"));
console.log(overAllROI.toFixed(2) + "%");
console.log(bestPerformingCampeginName);
console.log(neddingOptimizeCampeignName);
