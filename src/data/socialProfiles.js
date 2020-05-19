import emailIcon from '../assets/img/email_icon.png';
import githubIcon from '../assets/img/github_icon.png';
import linkedinIcon from '../assets/img/linkedin_icon.png';
import twitterIcon from '../assets/img/twitter_icon.png';

// Social Profiles global array. Sring case required because its a global array
// Each of the profile is going to be an object that consists of id

const SOCIAL_PROFILES = [
  {
    id: 1,
    link: 'mailto:bonidentity@yahoo.com',
    image: emailIcon,
  },
  {
    id: 2,
    link: 'https://github.com/Yomiogunde',
    image: githubIcon,
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/yeoman-rho-0a3bb824/',
    image: linkedinIcon,
  },
  {
    id: 4,
    link: 'https://twitter.com/YOgunde',
    image: twitterIcon,
  },
];

export default SOCIAL_PROFILES;
