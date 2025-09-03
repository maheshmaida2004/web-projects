const fs = require("fs");

const data = fs.readFileSync("./marketData.json", "utf8");
const marketsData = JSON.parse(data);

const appendText = function (text) {
  fs.appendFileSync("output.txt", text, "utf-8");
};

appendText("Campaign Performance:");
let totalCost = 0;
let totalRevenue = 0;
let totalROI = 0;
let BestPerformingCampaign = 0;
let highestRoI = Number.MIN_VALUE;
let CampaignNeedingOptimization = null;
let lowestROI = Number.MAX_VALUE;

marketsData.forEach(function (dataElement) {
  const { id, campaignName, impressions, clicks, conversions, revenue, cost } =
    dataElement;
  const CTR = (clicks / impressions) * 100;
  const CR = (conversions / clicks) * 100;
  const ROI = ((revenue - cost) / cost) * 100;
  const Revenue = revenue;
  const Cost = cost;
  totalCost += Cost;
  totalRevenue += Revenue;
  totalROI += ROI;
  if (highestRoI < ROI) {
    highestRoI = ROI;
    BestPerformingCampaign = campaignName;
  }
  if (lowestROI > ROI) {
    lowestROI = ROI;
    CampaignNeedingOptimization = campaignName;
  }

  appendText(`
${id}. ${campaignName}
   - CTR: ${CTR.toFixed(2)}%
   - Conversion Rate: ${CR.toFixed(2)}%
   - ROI: ${ROI}%
   - Revenue: ₹${Revenue} | Cost: ₹${Cost}

`);
});
appendText(`
---------------------------------------------------
Overall Summary:
- Total Spend: ₹${totalCost.toLocaleString()}
- Total Revenue: ₹${totalRevenue.toLocaleString()}
- Overall ROI: ${totalROI.toFixed(2)}%
- Best Performing Campaign: ${BestPerformingCampaign}
- Campaign Needing Optimization: ${CampaignNeedingOptimization}
---------------------------------------------------
`);
