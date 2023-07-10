import {MenuNames} from '../../../core/enums/menu-names';
import {SocialMediaNames} from '../../../core/enums/social-media-names';
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
      socialMedias: {
        [SocialMediaNames.FACEBOOK]: 'Facebook',
        [SocialMediaNames.TWITTER]: 'Twitter',
        [SocialMediaNames.YOUTUBE]: 'Youtube',
        [SocialMediaNames.LINKEDIN]: 'Linkedin',
        [SocialMediaNames.INSTAGRAM]: 'Instagram',
        [SocialMediaNames.MEDIUM]: 'Medium',
        [SocialMediaNames.GITHUB]: 'Github',
        [SocialMediaNames.DISCORD]: 'Discord',
        [SocialMediaNames.WEBSITE]: 'Website',
        [SocialMediaNames.PINTEREST]: 'Pinterest',
      },
    };
  }
}
