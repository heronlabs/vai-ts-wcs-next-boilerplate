import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CompanyDto} from '../../../core/dtos/company-dto';
import {Languages} from '../../../core/enums/languages';
import {WcsDataFactory} from '../../i18n/collections/wcs-data-factory';

export type LocaleStore = {
  currentLanguage: Languages;
  collections: {
    company: CompanyDto;
  };
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState: () => {
    const locale = Languages.PT_BR;
    const wcsData = WcsDataFactory.make(locale);

    return {
      currentLanguage: locale,
      collections: wcsData,
    };
  },
  reducers: {
    changeLanguage: (
      state: LocaleStore,
      {payload: locale}: PayloadAction<Languages>
    ) => {
      const wcsData = WcsDataFactory.make(locale);

      state.currentLanguage = locale;
      state.collections = wcsData;
    },
  },
});

export const {changeLanguage} = localeSlice.actions;

export const localeSliceReducer = localeSlice.reducer;
