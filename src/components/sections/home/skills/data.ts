import {
  mdiAndroid,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiPuzzleOutline,
  mdiReact,
  mdiAccountGroupOutline,
  mdiPaletteSwatchOutline,
  mdiTailwind,
  nextJs,
  mdiPostgreSQL,
  mdiPrisma,
  mdiNextAuth,
  mdiZustandRedux,
  mdiGo,
  mdiLinux,
  mdiDocker,
  mdiT3,
} from '@/icons';

export interface SkillProps {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: SkillProps[] = [
  { name: 'React Native', iconPath: mdiLanguageKotlin, color: '#6677e0' },
  { name: 'Go', iconPath: mdiGo, color: '#3ddc84' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'NextJS13/React', iconPath: nextJs, color: '#0070f3' },
  { name: 'TailwindCSS', iconPath: mdiTailwind, color: '#c43bad' },
  { name: 'Node JS', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Java', iconPath: mdiLanguageJava, color: '#ea2e2f' },
  { name: 'Graphql', iconPath: mdiLanguagePython, color: '#3a74a5' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'PostgreSQL', iconPath: mdiPostgreSQL, color: '#888888' },
  { name: 'Prisma', iconPath: mdiPrisma, color: '#0070f3' },
  { name: 'Next Auth', iconPath: mdiNextAuth, color: '#f7df1e' },
  { name: 'Zustand/RTK', iconPath: mdiZustandRedux, color: '#e34f26' },
  { name: 'Linux', iconPath: mdiLinux, color: '#6677e0' },
  { name: 'Docker', iconPath: mdiDocker, color: '#c43bad' },
  { name: 'T3', iconPath: mdiT3, color: '#888888' },
  {
    name: 'Community',
    iconPath: mdiAccountGroupOutline,
    color: '#888888',
    hide: true,
  },
];

const skillsKeys = [...skills.map((it) => it.name.toLowerCase())] as const;
export type SkillKey = typeof skillsKeys[number];
