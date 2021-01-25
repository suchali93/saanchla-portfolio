import CultureFitImage from '../pages/CaseStudies/CultureFit/images/Banner.png';
import BOSImage from '../pages/CaseStudies/BOS/images/Banner.png';
import TeamsVRImage from '../pages/CaseStudies/TeamsVR/images/Banner.png';
import OrigynsImage from '../pages/CaseStudies/Origyns/images/Banner.png';

export const FOOTER_HEIGHT = '85px';

export const HOME = 'Home';
export const SIDE_GIGS = 'Side Gigs';
export const ABOUT = 'About';
export const CULTURE_FIT = 'CultureFit';
export const BLOCKERS_OF_SCAM = 'Blockers of Scam';
export const TEAMS_VR = 'TeamsVR';
export const ORIGYNS = 'Origyns';

export const DETAILS = {
  [HOME]: { pathname: '/' },
  [SIDE_GIGS]: { pathname: '/side-gigs' },
  [ABOUT]: { pathname: '/about' },
  [CULTURE_FIT]: {
    pathname: '/case/culture-fit',
    description:
      'A platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit.',
    imageSrc: CultureFitImage,
  },
  [BLOCKERS_OF_SCAM]: {
    pathname: '/case/bos',
    description:
      "A platform that compliments the existing 'scamBlock' Chrome extension in its goal of reporting potentially dangerous websites and social media profiles.",
    imageSrc: BOSImage,
  },
  [TEAMS_VR]: {
    pathname: '/case/teams-vr',
    description:
      'An extension for Microsoft Teams to support a better work from home experience.',
    imageSrc: TeamsVRImage,
  },
  [ORIGYNS]: {
    pathname: '/case/origyns',
    description: 'A furniture company that designs and sells modern pieces.',
    imageSrc: OrigynsImage,
    inProgress: true,
  },
};

export const CASE_STUDY_PAGES = [CULTURE_FIT, TEAMS_VR, BLOCKERS_OF_SCAM, ORIGYNS];
