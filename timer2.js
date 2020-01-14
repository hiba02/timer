console.log("Give me a number 1 to 9 or a letter b");
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    process.exit();
  }
  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    },key * 1000);
  }
});