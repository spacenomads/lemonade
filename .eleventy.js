const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
  config.addPassthroughCopy({"_src/assets/_domain/cname.txt": "/CNAME"});
  config.addPassthroughCopy({"_src/assets/_domain/humans.txt": "/humans.txt"});
  config.addPassthroughCopy({"_src/assets/_icon/favicon.ico": "/favicon.ico"});
  config.addPassthroughCopy("_src/**/img/*.jpg");
  config.addPassthroughCopy("_src/**/img/*.png");
  config.addPassthroughCopy("_src/assets/fonts");
  config.addPassthroughCopy("_src/assets/css");
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