import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { WayOfTheHero, FoolishChoice, LocationHint } from '../../types/memory';

export interface MemoryState {
  wayOfTheHeros: WayOfTheHero[];
  foolishChoices: FoolishChoice[];
  locationHints: LocationHint[];
}

const initialState: MemoryState = {
  wayOfTheHeros: [],
  foolishChoices: [],
  locationHints: [],
};

/* スライス */
export const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    /* Way of The Hero */
    addWayOfTheHero: (state, action: PayloadAction<WayOfTheHero>) => {
      state.wayOfTheHeros.push(action.payload);
    },
    removeWayOfTheHero: (state, action: PayloadAction<WayOfTheHero>) => {
      state.wayOfTheHeros = state.wayOfTheHeros.filter(woth => woth.hint !== action.payload.hint);
    },
    /* Foolish choice */
    addFoolishChoice: (state, action: PayloadAction<FoolishChoice>) => {
      state.foolishChoices.push(action.payload);
    },
    removeFoolishChoice: (state, action: PayloadAction<FoolishChoice>) => {
      state.foolishChoices = state.foolishChoices.filter(fc => fc.hint !== action.payload.hint);
    },
    /*  Location hint */
    addlocationHint: (state, action: PayloadAction<LocationHint>) => {
      state.locationHints.push(action.payload);
    },
  },
  extraReducers: {},
});

/* アクション */
export const { addWayOfTheHero, removeWayOfTheHero } = memorySlice.actions;
export const { addFoolishChoice, removeFoolishChoice } = memorySlice.actions;

/* セレクタ */
export const selectWayOfTheHeros = (state: RootState) => state.memory.wayOfTheHeros;
export const selectFoolishChoices = (state: RootState) => state.memory.foolishChoices;
export const selectLocationHints = (state: RootState) => state.memory.locationHints;

export default memorySlice.reducer;
