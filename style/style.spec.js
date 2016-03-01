import fs from 'fs';
import test from 'ava';
import path from 'path';
import sass from 'node-sass';
import postcss from 'postcss';
import cssnano from 'cssnano';
import cssnext from 'postcss-cssnext';
import importer from 'postcss-import';
import { cssfmt } from 'cssfmt';

const tidyCSS = (css, from) => {
  return postcss()
    .use(importer())
    .use(cssnext())
    .use(cssnano({ mergeRules: false }))
    .use(cssfmt())
    .process(css, { from })
    .then((result) => result.css);
};

const compileSCSS = () => {
  const file = path.join('sass', 'index.scss');
  return new Promise((resolve) => {
    sass.render({ file }, (err, result) => {
      resolve(tidyCSS(result.css.toString()));
    });
  });
};

const compileCSS = () => {
  const file = path.join('css', 'index.css');
  const css = fs.readFileSync(file, 'utf8');
  return tidyCSS(css, file);
};

test.cb('The CSS (cssnext) and SCSS have the same output', t => {
  const css = compileCSS();
  const scss = compileSCSS();
  Promise.all([css, scss]).then((values) => {
    t.same(values[0], values[1]);
    t.end();
  });
});
