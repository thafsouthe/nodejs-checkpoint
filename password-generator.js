const generator = require('generate-password');

function generateRandomPassword() {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
  });
  console.log("Generated Password:", password);
}

generateRandomPassword();
