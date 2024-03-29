import {I18n} from '../interfaces/i18n';
import {WcsDataDto} from './wcs-data-dto';

export class PtBrCollection implements I18n<WcsDataDto> {
  translate(): WcsDataDto {
    return {
      company: {
        name: 'my-project',
        shortDescription: 'This is my-project',
        url: 'https://heronlabs-sandbox.com',
        socialMedias: [],
      },
    };
  }
}
