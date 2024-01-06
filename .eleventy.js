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

function getLocaleDate(date) {
	return date.toLocaleString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});
}



module.exports = function (config) {
	config.addPassthroughCopy({'_src/assets/_domain/cname.txt': '/CNAME'});
	config.addPassthroughCopy({'_src/assets/_icon/favicon.ico': '/favicon.ico'});
	config.addPassthroughCopy('_src/blog/**/img/*.{png,svg,jpg,webp}');
	config.addPassthroughCopy('_src/assets/fonts');
	config.addPassthroughCopy('_src/assets/css');
	config.addPassthroughCopy('_src/assets/images');
	config.addPassthroughCopy('_src/assets/js');
	config.addPassthroughCopy({'_src/assets/rss': '/rss'});

	config.addPlugin(eleventyNavigationPlugin);


	config.addTransform('htmlmin', function (content, outputPath) {
		if (outputPath.endsWith('.html')) {
			const minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				preserveLineBreaks: false
			});
		}

		if (outputPath.endsWith('.xml')) {
			const regex = /(max-width:[0-9]{1,}(px|%)*;)/g;
			const undangeredContent = content.replace(regex, '');

			return undangeredContent;
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

		return `#${tag} #SiDiosTeDaLimones`;
	});


	config.addNunjucksFilter('spanMe', function(str) {
		return str.split(' ')
			.map(word => `<span class="post__title-mark-item">${word}</span>`)
			.join(' ');
	});


	config.addNunjucksFilter('isFuture', function(date) {
		const postDate = new Date(date);
		const now = new Date();
		return postDate > now ? 'home-post--future': '';
	});


	config.addNunjucksFilter('filterByYear', function(collection, year) {

		return collection
			.filter(post => {
				return year === post.data.date.getFullYear();
			});
	});


	config.addNunjucksFilter('datetime', function(date) {
		return getLocaleDate(date)
			.split('/')
			.reverse()
			.join('-');;
	});

	config.addNunjucksFilter('formatDate', function(date) {
		return getLocaleDate(date);
	});

	config.addNunjucksFilter('convertToAbsoluteURL', function(post, postURL) {
		const targetStr = 'src="./img';
		const resultStr = `src="https://sidiostedalimones.com${postURL}img`;
		const content = post.replaceAll(targetStr, resultStr);
		return content;
	});

	config.addNunjucksFilter('rfc822Inator', function(strDate) {
		return new Date(strDate).toUTCString();
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
