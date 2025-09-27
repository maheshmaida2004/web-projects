let str =
  "    Welcome  to  the   JavaScript   World!!!   Learn,   Code, Code,   Build.  ";

function formatWord(word) {
  return word
    .split("")
    .filter(function (ch) {
      const findChar = ch.toLowerCase().charCodeAt(0);
      if (findChar >= 97 && findChar <= 122) return findChar;
    })
    .join("");
}

let strSentence = str
  .trim()
  .split(" ")
  .filter(function (word) {
    if (word !== "") return word;
  });
let cleanStr = strSentence
  .map(function (word) {
    return formatWord(word);
  })
  .join(" ");
const wordCount = cleanStr.split(" ").length;
const uniqueWordCount = new Set(cleanStr.split(" ")).size;
const sentenceCase = cleanStr
  .split("")
  .map(function (ch, i) {
    if (i === 0) return ch.toUpperCase();
    else return ch.toLowerCase();
  })
  .join("");

const titleCase = cleanStr
  .split(" ")
  .map(function (word) {
    return word
      .split("")

      .map(function (ch, i) {
        if (i === 0) return ch.toUpperCase();
        else return ch.toLowerCase();
      })
      .join("");
  })
  .join(" ");

console.log(wordCount);
console.log(uniqueWordCount);
console.log(sentenceCase);
console.log(titleCase);
