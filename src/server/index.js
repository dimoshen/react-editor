import express from 'express';
import cors from 'cors';

import * as todoController from './controllers/items.js'


const app = express();

app.use(cors());

app.get('/items', todoController.getAll);

app.listen(5000, () => {
  console.log(`Server is running on ${5000}`);
});

export default app;
