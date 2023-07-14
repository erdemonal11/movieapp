import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    setMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export default redux-store;