import AthleisureCoImage from '../pages/CaseStudies/AthleisureCo/images/banner.png';
import BOSImage from '../pages/CaseStudies/BOS/images/banner.png';
import CultureFitImage from '../pages/CaseStudies/CultureFit/images/banner.png';
import OrigynsImage from '../pages/CaseStudies/Origyns/images/banner.png';
import VRTeamsImage from '../pages/CaseStudies/VRTeams/images/banner.png';

export const FOOTER_HEIGHT = '112px';

export const HOME = 'Home';
export const SIDE_GIGS = 'Side Gigs';
export const ABOUT = 'About';

export const ATHLEISURE_CO = 'Athleisure Co.';
export const BLOCKERS_OF_SCAM = 'Blockers of Scam';
export const CULTURE_FIT = 'CultureFit';
export const ORIGYNS = 'Origyns';
export const VR_TEAMS = 'VR Teams';

export const DETAILS = {
  [HOME]: { pathname: '/' },
  [SIDE_GIGS]: { pathname: '/side-gigs' },
  [ABOUT]: { pathname: '/about' },

  [ATHLEISURE_CO]: {
    pathname: '/case/athleisure-co',
    type: 'Website Design',
    description: 'A furniture company that designs and sells modern pieces.',
    imageSrc: AthleisureCoImage,
    backgroundColor: '#FFF8F7',
    inProgress: true,
  },
  [BLOCKERS_OF_SCAM]: {
    pathname: '/case/bos',
    type: 'Website Redesign',
    description:
      'Redesigning the Blockers of Scam website to promote the new scamBlock Chrome extension and foster community engagement.',
    imageSrc: BOSImage,
    backgroundColor: '#F5FBF9',
  },
  [CULTURE_FIT]: {
    pathname: '/case/culture-fit',
    type: 'Product Design',
    description:
      'A platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit.',
    imageSrc: CultureFitImage,
    backgroundColor: '#F3F8FF',
  },
  [ORIGYNS]: {
    pathname: '/case/origyns',
    type: 'Product Design',
    description: 'A furniture company that designs and sells modern pieces.',
    imageSrc: OrigynsImage,
    backgroundColor: '#F9F8F7',
    inProgress: true,
  },
  [VR_TEAMS]: {
    pathname: '/case/vr-teams',
    type: 'VR Design',
    description:
      'An extension for Microsoft Teams to support a better work from home experience.',
    imageSrc: VRTeamsImage,
    backgroundColor: '#F6F6F8',
  },
};

// order in which the case studies appear on the home page
export const CASE_STUDY_PAGES = [
  ORIGYNS,
  CULTURE_FIT,
  // ATHLEISURE_CO,
  BLOCKERS_OF_SCAM,
  VR_TEAMS,
];
