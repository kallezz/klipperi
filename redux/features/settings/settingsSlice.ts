import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateRange } from "../../api/apiTypes";

export interface SettingsState {
  range: DateRange;
  shuffle: boolean;
  autoplay: boolean;
  playlist: boolean;
  sidebar: boolean;
}

const initialState: SettingsState = {
  range: 1,
  shuffle: false,
  autoplay: true,
  playlist: true,
  sidebar: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.range = action.payload;
    },
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
    toggleAutoplay: (state) => {
      state.autoplay = !state.autoplay;
    },
    togglePlaylist: (state) => {
      state.playlist = !state.playlist;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const {
  setDateRange,
  toggleShuffle,
  toggleAutoplay,
  togglePlaylist,
  toggleSidebar,
} = settingsSlice.actions;
export default settingsSlice;
