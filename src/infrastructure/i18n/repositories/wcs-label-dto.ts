import {MenuNames} from '../../../core/enums/menu-names';
import {SocialMediaNames} from '../../../core/enums/social-media-names';

export type WcsLabelDto = {
  languages: {
    portuguese: string;
  };
  menu: {
    [MenuNames.INDEX]: string;
  };
  socialMedias: {
    [SocialMediaNames.PINTEREST]: string;
    [SocialMediaNames.INSTAGRAM]: string;
    [SocialMediaNames.FACEBOOK]: string;
    [SocialMediaNames.TWITTER]: string;
    [SocialMediaNames.YOUTUBE]: string;
    [SocialMediaNames.LINKEDIN]: string;
    [SocialMediaNames.INSTAGRAM]: string;
    [SocialMediaNames.MEDIUM]: string;
    [SocialMediaNames.GITHUB]: string;
    [SocialMediaNames.DISCORD]: string;
    [SocialMediaNames.WEBSITE]: string;
    [SocialMediaNames.PINTEREST]: string;
  };
};
