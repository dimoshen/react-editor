import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceItem } from "../../types/WorkspaceItem";

type ItemsState = {
  items: WorkspaceItem[];
};

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'workspaceItems',
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
    moveUp: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index > 0) {
        [state.items[index], state.items[index - 1]] = [state.items[index - 1], state.items[index]];
      }
    },
    moveDown: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index < state.items.length - 1) {
        [state.items[index], state.items[index + 1]] = [state.items[index + 1], state.items[index]];
      }
    },
    updateContent: (state, action: PayloadAction<{id: string, content: string}>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.content = action.payload.content;
      }
    }
  }  
})

export default itemsSlice.reducer;
export const { actions } = itemsSlice;
