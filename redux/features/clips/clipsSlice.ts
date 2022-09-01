import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TwitchClip } from "../../api/apiTypes";

export interface ClipsState {
  current: TwitchClip | null;
}

const initialState: ClipsState = {
  current: null,
};

const clipsSlice = createSlice({
  name: "clips",
  initialState,
  reducers: {
    setCurrentClip: (state, action: PayloadAction<TwitchClip>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentClip } = clipsSlice.actions;

export default clipsSlice;
