import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NoteFieldState {
  note: string[];
}

const initialState: NoteFieldState = {
  note: [],
};

const noteFieldSlice = createSlice({
  name: "noteField",
  initialState,
  reducers: {
    addNote(state: NoteFieldState, action: PayloadAction<string>) {
      state.note.push(action.payload);
    },
  },
});

export const noteFieldReducer = noteFieldSlice.reducer;
export const { addNote } = noteFieldSlice.actions;
