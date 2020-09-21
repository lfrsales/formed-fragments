const { dest, src } = require('gulp');
const zip = require('gulp-zip');

const config = require('./config.json');

function zipDir() {
    return src('./src/**')
        .pipe(zip('formed-fragments.zip'))
		.pipe(dest('./build'))
		.pipe(dest(config.liferayDeployDir));
};

function deploy() {
	console.log('Deploying to: ' + config.liferayDeployDir);
	
	return zipDir();
}

exports.deploy = deploy;
