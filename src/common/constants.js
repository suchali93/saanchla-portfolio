import CultureFitImage from '../pages/CaseStudies/CultureFit/images/Banner.png';
import BOSImage from '../pages/CaseStudies/BOS/images/Banner.png';
import VRTeamsImage from '../pages/CaseStudies/VRTeams/images/Banner.png';
import OrigynsImage from '../pages/CaseStudies/Origyns/images/Banner.png';

export const FOOTER_HEIGHT = '85px';

export const HOME = 'Home';
export const SIDE_GIGS = 'Side Gigs';
export const ABOUT = 'About';
export const CULTURE_FIT = 'CultureFit';
export const BLOCKERS_OF_SCAM = 'Blockers of Scam';
export const VR_TEAMS = 'VR Teams';
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
      'Redesigning the Blockers of Scam website to promote the new scamBlock Chrome extension and foster community engagement.',
    imageSrc: BOSImage,
  },
  [VR_TEAMS]: {
    pathname: '/case/vr-teams',
    description:
      'An extension for Microsoft Teams to support a better work from home experience.',
    imageSrc: VRTeamsImage,
  },
  [ORIGYNS]: {
    pathname: '/case/origyns',
    description: 'A furniture company that designs and sells modern pieces.',
    imageSrc: OrigynsImage,
    inProgress: true,
  },
};

export const CASE_STUDY_PAGES = [CULTURE_FIT, VR_TEAMS, BLOCKERS_OF_SCAM, ORIGYNS];
