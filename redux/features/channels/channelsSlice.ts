import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TwitchChannel } from "../../api/apiTypes";

export interface ChannelsState {
  history: TwitchChannel[];
  current: TwitchChannel | null;
}

const initialState: ChannelsState = {
  history: [],
  current: null,
};

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannelToHistory: (state, action: PayloadAction<TwitchChannel>) => {
      state.history.unshift(action.payload);
    },
    removeChannelFromHistory: (
      state,
      action: PayloadAction<TwitchChannel["id"]>
    ) => {
      state.history.splice(
        state.history.findIndex((channel) => {
          return channel.id === action.payload;
        })
      );
    },
    setCurrentChannel: (state, action: PayloadAction<TwitchChannel>) => {
      state.current = action.payload;
    },
  },
});

export const {
  addChannelToHistory,
  removeChannelFromHistory,
  setCurrentChannel,
} = channelsSlice.actions;

export default channelsSlice;
