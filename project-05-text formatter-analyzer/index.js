const strData =
  "    welcome  to  the, the   JavaScript   World!!!   Learn,   Code,    Build, Build.  ";
const formatWord = function (word) {
  return word
    .split("")
    .filter(function (ch) {
      const charCode = ch.toLowerCase().charCodeAt(0);
      return charCode >= 97 && charCode <= 122;
    })
    .join("");
};

const cleanedText = strData
  .trim()
  .split(" ")
  .filter(function (ele) {
    return ele !== "";
  })
  .map(function (word) {
    return formatWord(word);
  })
  .join(" ");

const totalWords = cleanedText.split(" ").length;
const uniqueWords = new Set(cleanedText.split(" ")).size;
const totalCharacters = cleanedText.replaceAll(" ", "").length;
const includesJavaScript = cleanedText.includes("coder");

const sentenceCase = cleanedText
  .split("")
  .map(function (ch, i) {
    if (i === 0) return ch.toUpperCase();
    else return ch.toLowerCase();
  })
  .join("");
const captilizeCase = cleanedText
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

console.log(cleanedText);
console.log(totalWords);
console.log(uniqueWords);
console.log(totalCharacters);
console.log(includesJavaScript);
console.log(sentenceCase);
console.log(captilizeCase);
