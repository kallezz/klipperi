import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./features/settings/settingsSlice";
import channelsSlice from "./features/channels/channelsSlice";
import { twitchApi } from "./api/twitchApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import clipsSlice from "./features/clips/clipsSlice";

export const store = configureStore({
  reducer: {
    [settingsSlice.name]: settingsSlice.reducer,
    [channelsSlice.name]: channelsSlice.reducer,
    [clipsSlice.name]: clipsSlice.reducer,
    [twitchApi.reducerPath]: twitchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(twitchApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
