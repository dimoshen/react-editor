import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceItem } from "../../types/WorkspaceItem";

type ItemsState = {
  items: WorkspaceItem[];
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
    set: (state, action: PayloadAction<WorkspaceItem[]>) => {
      state.items = action.payload;
    },
    add: (state, action: PayloadAction<WorkspaceItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // move: (state, action: PayloadAction<{fromIndex: number, toIndex: number}>) => {
    //   const { fromIndex, toIndex } = action.payload;
    //   const updatedItems = [...state.items];
    //   const [movedItem] = updatedItems.splice(fromIndex, 1);
    //   updatedItems.splice(toIndex, 0, movedItem);
    //   state.items = updatedItems;
    // }
  }  
})

export default itemsSlice.reducer;
export const { actions } = itemsSlice;
