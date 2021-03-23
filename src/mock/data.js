import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cristian Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Cristian',
  subtitle: 'I´m a front-end developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey! I´m a Front-end developer in training. Passionate and enthusiast for precise and meaningful web pages. ',
  paragraphTwo: 'I´m very familiar with HTML, CSS, JavaScript, React and some Python and SQL.',
  paragraphThree: 'I´m also very interested in Literature, Culture and Education.',
  resume: 'https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cristian_profe.JPG',
    title: 'Cristian Profe',
    info: 'I fully designed, developed and deployed my own teacher professional webpage.',
    info2: '',
    url: 'https://criistianrod.github.io/',
    repo: 'https://github.com/CriistianRod/CriistianRod.github.io/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'entempo.JPG',
    title: 'enTempo design concept',
    info: `enTempo is the best course for time management.
          It has helped a lot of people to improve their life by teaching them how to organize their tasks.`,
    info2: 'I fully designed, developed, and deployed this webpage as a propposal to its manager.',
    url: 'https://criistianrod.github.io/entempo/',
    repo: 'https://github.com/CriistianRod/entempo', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cristian.frontend.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/CriistianRod',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/criistiianrod/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
