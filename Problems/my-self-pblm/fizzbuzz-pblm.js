for (i = 0; i <= 50; i++) {
  if (i % 3) {
    console.log("FIZZ");
  } else if (i % 5) {
    console.log("BUZZ");
  } else if (i % 3 && i % 5) {
    console.log("FIZZBUZ");
  }
}
