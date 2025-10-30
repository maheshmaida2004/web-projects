const fs = require("fs");
const { title } = require("process");

const data = fs.readFileSync("./data.json", "utf8");
const moviesData = JSON.parse(data);

const inputStr = process.argv.slice(2).at(0).toLocaleLowerCase();
let movieName = "";
let resultsName = [];
let topPicksByGenre = {};
function appendtext(data) {
  fs.appendFileSync("output.txt", data, "utf-8");
}

moviesData.forEach(function (movies) {
  const { genre, title, rating, year } = movies;
  genre.forEach(function (movie) {
    if (inputStr === movie.toLocaleLowerCase()) {
      movieName = movie;
      resultsName.push({ title, year, rating });
    }
  });
  genre.forEach(function (gen) {
    if (topPicksByGenre[gen] === undefined) {
      topPicksByGenre[gen] = { title: "", rating: 0 };
    }
    if (topPicksByGenre[gen].rating < movies.rating) {
      topPicksByGenre[gen].title = movies.title;
      topPicksByGenre[gen].rating = movies.rating;
    }
  });
});

appendtext(`

  -----------------------------------------
       MOVIE RECOMMENDATION ENGINE
-----------------------------------------
Search: ${movieName}

Results:\n`);

resultsName.forEach(function (result) {
  const { title, year, rating } = result;
  appendtext(`- ${title} (${year}) - ${rating}\n`);
});
appendtext(`
Top Picks by Genre:
`);
for (let gen in topPicksByGenre) {
  const { title, rating } = topPicksByGenre[gen];
  appendtext(`- ${gen}:${title} (${rating})\n`);
}
