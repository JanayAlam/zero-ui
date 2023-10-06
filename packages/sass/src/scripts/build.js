const fs = require('fs');
const path = require('path');
const sass = require('sass');

/**
 * Compile a scss file to css file.
 * @param {String} src Source file path.
 * @param String dest Output file path.
 */
const compile = (src, dest) => {
  const result = sass.compile(path.resolve(src), {
    style: 'expanded',
    verbose: true,
  });

  fs.writeFileSync(path.resolve(dest), result.css);
};

/**
 * Get all components present in the design system.
 * @return {Array<Object>} An array of the source and destination file path of each components.
 */
const getComponents = () => {
  let allComponents = [];

  // reads all the directories that contains components except foundations, base, and scripts
  const types = fs.readdirSync('src').filter((type) => {
    const isDirectory = fs.statSync(`src/${type}`).isDirectory();
    return (
      isDirectory &&
      type !== 'foundations' &&
      type !== 'base' &&
      type !== 'scripts'
    );
  });

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      src: `src/${type}/${file}`,
      dest: `lib/${file.slice(0, -5)}.css`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

// Compiling the global scss file.
compile('src/index.scss', 'lib/index.css');

// Compiling the rest of the components.
getComponents().forEach((component) => compile(component.src, component.dest));
