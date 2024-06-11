import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RadioSelection {
  selected: string | null;
}

const initialState: RadioSelection = {
  selected: null,
};

const radioSelectionSlice = createSlice({
  name: "radioSelection",
  initialState,
  reducers: {
    setSelected(state: RadioSelection, action: PayloadAction<string>) {
      state.selected = action.payload;
    },
  },
});

export const radioSelectionReducer = radioSelectionSlice.reducer;
export const { setSelected } = radioSelectionSlice.actions;
