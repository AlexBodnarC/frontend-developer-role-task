import { configureStore } from "@reduxjs/toolkit";

import { radioSelectionReducer } from "./radioSelection/slice";
import { noteFieldReducer } from "./noteField/slice";

export const store = configureStore({
  reducer: {
    radioSelection: radioSelectionReducer,
    noteField: noteFieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
