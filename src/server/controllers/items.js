import * as todoService from '../services/items.js';

export const getAll = async (req, res) => {
  try {
    const items = await todoService.getAll();
    res.send(items);

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
