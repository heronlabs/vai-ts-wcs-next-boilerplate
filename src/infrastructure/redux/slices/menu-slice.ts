import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MenuNames} from '../../../core/enums/menu-names';

export type MenuStore = {
  currentPage: MenuNames;
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
    currentPage: MenuNames.HOME,
  },
  reducers: {
    goToPage: (
      state: MenuStore,
      {payload: menuItemName}: PayloadAction<MenuNames>
    ) => {
      state.currentPage = menuItemName;
    },
  },
});

export const {goToPage} = menuSlice.actions;

export const menuSliceReducer = menuSlice.reducer;
