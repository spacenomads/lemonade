const MODE_DEVELOPMENT = 'dev';
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlmin = require('html-minifier');

const now = new Date();
const {MODE: mode} = process.env;

const publishedPosts = (post) => {
  if (mode === MODE_DEVELOPMENT) return true;
  return post.date <= now && !post.data.draft;
};
const capitalize = str => {
  const parts = str.split('');
  parts[0] = parts[0].toUpperCase();
  return parts.join('');
}




module.exports = function (config) {
  config.addPassthroughCopy({'_src/assets/_domain/cname.txt': '/CNAME'});
  config.addPassthroughCopy({'_src/assets/_icon/favicon.ico': '/favicon.ico'});
  config.addPassthroughCopy('_src/**/img/*.*');
  config.addPassthroughCopy('_src/assets/fonts');
  config.addPassthroughCopy('_src/assets/css');
  config.addPassthroughCopy('_src/assets/images');
  config.addPassthroughCopy('_src/assets/js');

  config.addPlugin(eleventyNavigationPlugin);


  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false
      });

      return minified;
    }

    return content;
  });

  config.addCollection('blog', collection => {
    return collection
      .getFilteredByGlob('_src/blog/**/index.md')
      .filter(publishedPosts);
  });

  config.addNunjucksFilter('hashtag', function(str) {
    const tag = str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[¿?!¡\.,-]/g, '')
    .replace(/ +/g, ' ')
    .split(' ')
    .map(word => capitalize(word))
    .join('');

    return `#${tag}%20#SiDiosTeDaLimones`;
  });

  config.addNunjucksFilter('isFuture', function(date) {
    const postDate = new Date(date);
    const now = new Date();
    return postDate > now ? 'home-post--future': '';
  });





  return {
    dir: {
      input: '_src',
      output: 'dist',
      includes: '_templates',
      data: '_data',
    },
    templateFormats: ['njk', 'md'],
    htmltemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
