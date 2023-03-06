import {MenuNames} from '../../../core/enums/menu-names';

export type WcsLabelDto = {
  languages: {
    portuguese: string;
  };
  menu: {
    [MenuNames.INDEX]: string;
  };
};
