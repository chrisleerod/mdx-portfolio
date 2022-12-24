import path from 'path';
import fs from 'fs';

export const projectsPath = path.join(process.cwd(), 'pages/projects');
export const projectsFileNames = fs
  .readdirSync(projectsPath)
  .filter((projectsPath) => /\.mdx?$/.test(projectsPath));