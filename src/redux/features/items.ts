import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../../types/ItemType";

type ItemsState = {
  items: ItemType[];
  // loading: boolean;
  // error: string;
};

const initialState: ItemsState = {
  items: [],
  // loading: false,
  // error: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ItemType[]>) => {
      state.items = action.payload;
    },
    add: (state, action: PayloadAction<ItemType>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<ItemType>) => {
      state.items = state.items.filter(item => item !== action.payload);
    }
  }  
})

export default itemsSlice.reducer;
export const { actions } = itemsSlice;