import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import stationsSlice from "../features/stations/stationsSlice"
import authSlice from "../features/auth/authSlice"
import playPauseSlice from "../features/play-pause-button/playPauseSlice"
import setPlayingStationSlice from "../features/stations/setPlayingStationSlice"
import { favoritesSlice } from "../features/favorites/favoritesSlice"
import tagsSlice from "../features/tags/tagsSlice"
import countriesSlice from "../features/tags/countriesSlice"
import languageSlice from "../features/tags/languagesSlice"
import userPasswordSlice from "../features/userPassword/userPasswordSlice"



export const store = configureStore({
  reducer: {
    stations: stationsSlice.reducer,
    user: authSlice.reducer,
    playPause: playPauseSlice.reducer,
    playingStation: setPlayingStationSlice.reducer,
    favorites: favoritesSlice.reducer,
    tags: tagsSlice.reducer,
    countries: countriesSlice.reducer,
    languages: languageSlice.reducer,
    password: userPasswordSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>


