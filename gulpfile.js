import { readFile } from 'fs/promises';
import { src, dest, series, watch } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpif from 'gulp-if';
import minify from 'gulp-minify';
import mqpacker from '@hail2u/css-mqpacker';
import postcss from 'gulp-postcss';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps';
import zip from 'gulp-zip';


const configFile = await readFile('./config.json', 'utf-8');
const config = JSON.parse(configFile);
const packageFile = await readFile('./package.json', 'utf-8');
const packageJson = JSON.parse(packageFile);
const isDev = process.env.MODE === config.env.dev;



// UTILS
// > Generate a cool timestamp (YYMMDD)
function getTimestamp() {
	const date = new Date();
	const mm = ('0'+(date.getMonth()+1)).slice(-2);
	const dd = ('0'+date.getUTCDate()).slice(-2);
	const yy = date.getUTCFullYear().toString().substr(-2);
	const h = date.getHours();
	const m = date.getMinutes();
	const timestamp = `${yy}${mm}${dd}-${h}${m}-`;
	return timestamp;
}





// TASKS
// > ZIP the public folder
function zipit() {
	return src(config.zip.src)
		.pipe(zip(getTimestamp() + packageJson.name + '.zip'))
		.pipe(dest(config.zip.dest));
}

function styles() {
	const plugins = [mqpacker({ sort: true })];
	return src(config.styles.src)
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(sass.sync({
			api: 'modern-compiler',
			style: isDev ? 'expanded' : 'compressed',
		}).on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulpif(isDev, sourcemaps.write('./')))
		.pipe(dest(config.styles.dest));
}

function scripts() {
	return src(config.scripts.src)
		.pipe(minify({
			noSource: true,
			ext: {
				min: '.js'
			}
		}))
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(gulpif(isDev, sourcemaps.write('./')))
		.pipe(dest(config.scripts.dest));
}

const build = series(styles);

const go = series(build, function (cb) {
	watch(config.watch.styles, styles);
	//watch(config.watch.scripts, scripts);
	cb();
});

export {
	build,
	styles,
	go,
	zipit
};
