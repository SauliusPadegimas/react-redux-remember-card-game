import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    cards: [],
    opened: [],
    guested: [],
  },
  reducers: {
    drawcards: (state, action) => {
      state.cards = action.payload;
    },
    setOpen: (state, action) => {
      console.log('state.opened.length ===', state.opened.length);
      if (state.opened.length === 1) {
        console.log('veikia vienas');
        if (state.opened[0].code === action.payload.code) {
          state.guested = [...state.guested, state.opened[0], action.payload];
          state.opened = [...state.opened, action.payload];
        } else {
          state.opened = [...state.opened, action.payload];
        }
      } else {
        console.log('veikia nevienas');
        state.opened = [action.payload];
      }
      console.log('state.opened ===', state.opened);
    },
  },
});

export const { drawcards, setOpen } = generalSlice.actions;
export default generalSlice.reducer;
