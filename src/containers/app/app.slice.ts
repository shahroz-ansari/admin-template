import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../store/create-slice';
import { localDataService } from '../storage/local-data.service';
import type { CustomThemeOptions } from './app.model';
import { ThemeTypes } from './app.model';

interface AppSlice {
  theme: ThemeTypes;
  themeOptions: CustomThemeOptions;
  sidebarVisible: boolean;
}

const initialState: AppSlice = {
  theme: ThemeTypes.default,
  themeOptions: localDataService.getAppThemeOptions() || {},
  sidebarVisible: false,
};

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: (create) => ({
    appTheme: create.reducer((state, action: PayloadAction<ThemeTypes>) => {
      state.theme = action.payload;
    }),
    appThemeOptions: create.reducer(
      (state, action: PayloadAction<CustomThemeOptions>) => {
        state.themeOptions = action.payload;
      },
    ),
    appSidebarVisiblity: create.reducer(
      (state, action: PayloadAction<boolean | undefined>) => {
        state.sidebarVisible =
          action.payload !== undefined ? action.payload : !state.sidebarVisible;
      },
    ),
  }),
});

export const { appTheme, appThemeOptions, appSidebarVisiblity } = appSlice.actions;
