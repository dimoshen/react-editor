import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const items = ['headline', 'paragraph', 'button', 'image'];

app.get('/items', (req, res) => {
  res.send(items);
});

app.listen(5000, () => {
  console.log(`Server is running on ${5000}`);
});
