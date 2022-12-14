import path from 'path';
import fs from 'fs';

export const projectsPath = path.join(process.cwd(), 'projects');
export const projectsFileNames = fs
  .readdirSync(projectsPath)
  .filter((projectsPath) => /\.mdx?$/.test(projectsPath));

export const blogsPath = path.join(process.cwd(), 'writing');
export const blogsFileNames = fs
  .readdirSync(blogsPath)
  .filter((blogsPath) => /\.mdx?$/.test(blogsPath));