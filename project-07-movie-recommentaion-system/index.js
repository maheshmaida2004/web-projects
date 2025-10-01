const fs = require("fs");
const jsonData = fs.readFileSync("./data.json", "utf-8");
const data = JSON.parse(jsonData);
let search = "Sci-Fi";
let searchMovieName = "";
let result = [];

data.forEach(function (list) {
  const { genre, title, rating, year } = list;

  genre.forEach(function (movie) {
    if (movie === search) {
      searchMovieName = movie;

      result.push({ title, year, rating });
    }
  });
});
let sortRating = data.sort(function (a, b) {
  const one = a.rating;
  const two = b.rating;
  return two - one;
});
function printTopRatings(sortRating) {
  sortRating.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.rating}`);
  });
}
console.log(searchMovieName);
result.forEach(function (element) {
  const { title, year, rating } = element;
  console.log(title, year, rating);
});
printTopRatings(sortRating);
