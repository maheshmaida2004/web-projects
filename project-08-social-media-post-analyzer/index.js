const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf8");
const moviesData = JSON.parse(data);
let totalPost = moviesData.length;

let topContributors = {};
let topHastangs = {};
let uniqueUser = 0;

moviesData.forEach(function (userPost) {
  const { user, post } = userPost;
  if (topContributors[user] === undefined) {
    topContributors[user] = 0;
    uniqueUser++;
  }
  topContributors[user]++;
  for (let i = 0; i < post.length; i++) {
    const splitStr = post[i].join(" ");
    if (topHastangs[splitStr] === undefined) {
      topHastangs[splitStr] = 0;
    }
    topHastangs[splitStr]++;
  }
});
console.log(topHastangs);
// console.log(totalPost);
// console.log(uniqueUser);
// for (key in topContributors) {
//   console.log(` ${key}: ${topContributors[key]} post`);
// }
