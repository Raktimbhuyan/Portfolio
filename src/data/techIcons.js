import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si'

// Maps a tech badge's display name (as used in src/data/projects.js and
// Skills.jsx) to its icon component. Add an entry here when you add a new
// technology, and both Skills and every project card will pick it up.
export const TECH_ICONS = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  Mongoose: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
}
