const fs = require("fs");

// Write "Hello Node" into welcome.txt
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    return console.error("Error writing file:", err);
  }
  console.log("welcome.txt created and written successfully.");
});

// Read and log content from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }
  console.log("Content of hello.txt:", data);
});
