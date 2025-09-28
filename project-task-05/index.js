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
const totalCharacters = cleanStr.replaceAll(" ", "").length;
const includesJavaScript = cleanStr.includes("JavaScript");
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

console.log(`

-----------------------------------------
        TEXT FORMATTER & ANALYZER
-----------------------------------------
Original Text:
"    Welcome  to  the   JavaScript   World!!!   Learn,   Code, Code    Build.  "

Cleaned Text:
${cleanStr}

Statistics:
- Total Words: ${wordCount}
- Unique Words: ${uniqueWordCount}
- Total Characters (No Spaces): ${totalCharacters}
- Does it include 'JavaScript'? ${includesJavaScript}
- Sentence Case: ${sentenceCase}
- Title Case: ${titleCase}
-----------------------------------------

*/
----------------------------------------`);
