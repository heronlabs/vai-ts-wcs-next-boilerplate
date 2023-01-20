import {Languages} from '../../../core/enums/languages';
import {PtBrCollection} from './pt-br-collection';
import {WcsDataDto} from './wcs-data-dto';

export class WcsDataFactory {
  private static makePtBr(): WcsDataDto {
    return new PtBrCollection().translate();
  }

  static make(language: Languages): WcsDataDto {
    const languages = {
      [Languages.PT_BR]: WcsDataFactory.makePtBr(),
    };

    return languages[language];
  }
}
