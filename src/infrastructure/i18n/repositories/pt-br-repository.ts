import {MenuNames} from '../../../core/enums/menu-names';
import {I18n} from '../interfaces/i18n';
import {WcsLabelDto} from './wcs-label-dto';

export class PtBrRepository implements I18n<WcsLabelDto> {
  translate(): WcsLabelDto {
    return {
      languages: {
        portuguese: 'Português',
      },
      menu: {
        [MenuNames.INDEX]: 'ínicio',
      },
    };
  }
}
