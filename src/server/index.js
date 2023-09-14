import express from 'express';

const app = express();

const items = ['headline', 'paragraph', 'button', 'image'];

app.get('/items', (req, res) => {
  res.send(items);
});

app.listen(5000, () => {
  console.log(`Server is running on ${5000}`);
});
