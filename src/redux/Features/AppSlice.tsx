import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  firstLogin: boolean;
}

const initialState: AppState = {
  firstLogin: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFirstLogin: (state, action: PayloadAction<boolean>) => {
      state.firstLogin = action.payload;
    },
  },
});

export const {setFirstLogin} = appSlice.actions;
export default appSlice.reducer;
