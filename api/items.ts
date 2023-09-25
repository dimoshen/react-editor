import axios from 'axios';
import { Item } from '../src/types/Item';

axios.defaults.baseURL = 'http://localhost:5000';

export function getAll(): Promise<Item[]> {
  return axios.get('/items')
    .then(res => res.data);
}

// export function getOne(postId: number): Promise<ItemType> {
//   return axios.get(`/items/:${postId}`)
//     .then(res => res.data);
// }

export function add(content: string): Promise<Item> {
  return axios.post('/items', { content })
    .then(res => res.data);
}
