//	Imports ____________________________________________________________________

const del = require('del');

const { GulpTasks } = require('./plugins/gulp-tasks');

//	Variables __________________________________________________________________

const tasks = new GulpTasks({ paths: 'tasks/**/*.@(js|json)' });

//	Initialize _________________________________________________________________

tasks.build([clean, 'scripts', 'tests', 'docs']);

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function clean () {
	
	return del(['out', 'test']);
	
}