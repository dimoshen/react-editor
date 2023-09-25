import * as todoController from '../src/server/controllers/items';

export default async (req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return todoController.getAll(req, res);
  }
  res.status(405).end();
};
