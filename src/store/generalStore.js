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
      // if there are already opened cards on table
      if (state.opened.length === 1) {
        // if you oepend two identical cards
        if (state.opened[0].code === action.payload.code) {
          state.guested = [...state.guested, state.opened[0], action.payload];
          state.opened = [...state.opened, action.payload];
        } else {
          state.opened = [...state.opened, action.payload];
        }
      } // if there are NOT already opened cards on table, or opened 2 cards and now they must be closed
      else {
        state.opened = [action.payload];
      }
      console.log('state.opened ===', state.opened);
    },
  },
});

export const { drawcards, setOpen } = generalSlice.actions;
export default generalSlice.reducer;
