import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { ToolType } from "../../types/ToolType";

type ItemsState = {
  items: ToolType[];
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
    // set: (state, action: PayloadAction<ToolType[]>) => {
    //   state.items = action.payload;
    // },
    add: (state, action: PayloadAction<ToolType>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<ToolType>) => {
      state.items = state.items.filter(item => item !== action.payload);
    }
  }  
})

export default itemsSlice.reducer;
export const { actions } = itemsSlice;