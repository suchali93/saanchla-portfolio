import AthleisureCoImage from '../pages/CaseStudies/AthleisureCo/images/landing.png';
import BOSImage from '../pages/CaseStudies/BOS/images/landing.png';
import CultureFitImage from '../pages/CaseStudies/CultureFit/images/landing.png';
import OrigynsImage from '../pages/CaseStudies/Origyns/images/landing.png';
import VRTeamsImage from '../pages/CaseStudies/VRTeams/images/landing.png';

export const FOOTER_HEIGHT = '112px';

export const HOME = 'Home';
export const WORK = 'Work';
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
    home: { backgroundColor: '#fff8f7' },
    caseStudy: { backgroundColor: '#ffeae6' },
    inProgress: true,
  },
  [BLOCKERS_OF_SCAM]: {
    pathname: '/case/bos',
    type: 'Website Redesign',
    description:
      'Redesigning the Blockers of Scam website to promote the new scamBlock Chrome extension and foster community engagement.',
    imageSrc: BOSImage,
    home: { backgroundColor: '#f5fBf9' },
    caseStudy: { backgroundColor: '#e4f3ed' },
  },
  [CULTURE_FIT]: {
    pathname: '/case/culture-fit',
    type: 'Product Design',
    description:
      'A platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit.',
    imageSrc: CultureFitImage,
    home: { backgroundColor: '#f3f8ff' },
    caseStudy: { backgroundColor: '#b9d4fe' },
  },
  [ORIGYNS]: {
    pathname: '/case/origyns',
    type: 'Product Design',
    description:
      'A luxury furniture e-commerce website that allows users to confidently create and shop fully customizable furniture online, while supporting the local Canadian economy.',
    imageSrc: OrigynsImage,
    home: { backgroundColor: '#f9f8f7' },
    caseStudy: { backgroundColor: '#eae9e4' },
    inProgress: true,
  },
  [VR_TEAMS]: {
    pathname: '/case/vr-teams',
    type: 'VR Design',
    description:
      'An extension for Microsoft Teams to support a better work from home experience.',
    imageSrc: VRTeamsImage,
    home: { backgroundColor: '#f6f6f8' },
    caseStudy: { backgroundColor: '#e4e4ea' },
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
