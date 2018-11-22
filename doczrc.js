import { css } from 'docz-plugin-css';
import pkg from './package.json';

const libName = pkg.name;

export default {
  dest: './docs',
  files: './docz/**/*.mdx',
  ordering: 'ascending',
  base: `/node-${libName}/`,
  plugins: [
    css(),
  ],
};
