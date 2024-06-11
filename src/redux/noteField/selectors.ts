import { RootState } from "../store";

export const getNote = (state: RootState) => state.noteField.note;
