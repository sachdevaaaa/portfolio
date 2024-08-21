import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-111.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Divyam Naveen Sachdeva',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello! I'm Divyam Naveen Sachdeva.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New Delhi based <strong className="text-stone-100">Full Stack Web Developer</strong>, currently working as an intern
        at Cosmic Technologies pvt Ltd
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume →',
      primary: false,
      
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact →',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Fullstack Web Developer and Designer, currently pursuing my enigneering degree from Delhi Technological University (formerly known as DCE). I believe myself to be a life long learner and thus always try to keep updating my skills. In my free time, I love to sketch and practice boxing and calisthenics.`,
  aboutItems: [
    {label: 'Location', text: 'New Delhi, India', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Sketching, Boxing, Calisthenics', Icon: SparklesIcon},
    {label: 'Study', text: 'Delhi Technological University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cosmic Technologies Ltd', Icon: BuildingOffice2Icon},
    {label: 'Freelance Work', text: 'Open', Icon: SparklesIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Punjabi',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 3,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HyerCode Website',
    description: 'Helped Redesign their Website.',
    url: 'https://hypercode.tech/',
    image: porfolioImage1,
  },
 
  {
    title: 'KeepWellMantras',
    description: '',
    url: 'https://keepwellmantras.com/',
    image: porfolioImage3,
  },
  {
    title: 'Upschol',
    description: '',
    url: 'https://upschol.com/',
    image: porfolioImage4,
  },
  {
    title: 'smv',
    description: '',
    url: 'https://www.dtusupermileage.in/',
    image: porfolioImage5,
  },

  {
    title: 'Auslink',
    description: '.',
    url: 'https://stage.efiles.com.au/sign-in',
    image: porfolioImage7,
  },
  {
    title: 'Art.devta',
    description: '',
    url: 'https://www.instagram.com/art.devta/',
    image: porfolioImage8,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022-26',
    location: 'Delhi Technological University',
    title: 'Bachellors in Technology',
    content: <p>pursuing major degree in Mechanical Eng. and my minor in Data Science Eng.</p>,
  },
  {
    date: '2022',
    location: 'Lancers Convent School',
    title: 'School',
    content: <p>I learned a lot of life skills, participating and achieving positions in various sports events, Debate Competitions etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'may, 2024-',
    location: 'Cosmic Technologies',
    title: 'FullTime Intern',
    content: (
      <p>
       I worked for several clients as a part of the company, I learnt a lot of skills along with time management and dealing with clients.
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Speed Motor Vehicles, Team DTU supermileagae',
    title: 'Head of Corporate and Design',
    content: (
      <p>
        
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Arjun Anand, Former Head, Team DTU supermileage',
      text: 'Divyam was very professional and easy to work with. the website turned out to be even better than our expectations. Great work!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'contact me',
  items: [
    {
      type: ContactType.Email,
      text: 'divyamsachdevaa@gmail.com',
      href: 'mailto:divyamsachdevaa@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New Delhi, India',
      href: 'https://www.google.com/maps/d/u/0/viewer?hl=en&ie=UTF8&t=h&source=embed&msa=0&ll=28.75024999999999%2C77.117425&spn=0.007995%2C0.009109&z=17&mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4',
    },
    {
      type: ContactType.Instagram,
      text: '@divyamsachdevaa',
      href: 'https://www.instagram.com/divyamsachdevaa/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/divyam-naveen-b4a32a25b/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/divyamsachdevaa/'},
  {label: 'Youtube', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
