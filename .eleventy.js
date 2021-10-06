const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
  config.addPassthroughCopy("_src/**/*.jpg");
  config.addPassthroughCopy("_src/**/*.png");
  config.addPlugin(eleventyNavigationPlugin);

  config.addCollection('blog', collection => {
    return collection.getFilteredByGlob('_src/blog/*/index.md');
  });

  return {
    dir: {
      input: '_src',
      output: 'dist',
      includes: '_templates',
      data: "_data",
    },
    templateFormats: ['njk', 'md'],
    htmltemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}