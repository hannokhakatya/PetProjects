const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const folderPath = path.join(__dirname, 'random-image');
const images = fs.readdirSync(folderPath);

function getRandomIndex (min,max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

app.get('/api/randomimage', (req, res) => {
  const randomImageIndex = getRandomIndex(0, images.length);
  const filePath = path.join(
    __dirname,
    'random-image',
    images[randomImageIndex]
  );
  const randomImage = fs.readFileSync(filePath,'base64');
  const srcImage = `data:image/jpeg;base64,${randomImage}`
  res.send({ srcImage });
});
