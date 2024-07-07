import { PayloadAction } from '@reduxjs/toolkit';
import { CustomThemeOptions, ThemeTypes } from '../../models/app.model';
import { localDataService } from '../../services/local-data/local-data.service';
import { createAppSlice } from '../create-slice';

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
    themeChange: create.reducer((state, action: PayloadAction<ThemeTypes>) => {
      state.theme = action.payload;
    }),
    themeOptionsUpdate: create.reducer(
      (state, action: PayloadAction<CustomThemeOptions>) => {
        state.themeOptions = action.payload;
      },
    ),
    sidebarVisiblityToggle: create.reducer(
      (state, action: PayloadAction<boolean | undefined>) => {
        state.sidebarVisible =
          action.payload !== undefined ? action.payload : !state.sidebarVisible;
      },
    ),
  }),
});

export const { themeChange, themeOptionsUpdate, sidebarVisiblityToggle } =
  appSlice.actions;
