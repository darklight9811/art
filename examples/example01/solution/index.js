// You get bonus points if you organized the env
const env = require(`./env.json`);

/**
 * Get any variable from the enviroment, you can use dot to nest objects.
 * 
 * @param {string} name Name of the enviroment variable to find
 */
function getenv (name, throwerror = true) {
	try {
		const variable = name.split('.').reduce((prev, curr) => prev[curr] , env);
		if (!variable && throwerror) throw new Error(`Variable ${name} was not found in env file`);
		console.log(variable);
	}
	catch (e) {
		console.warn(e.toString());
	}
}

function initializeApp () {
	getenv('app.name');
	getenv('app.description');
	getenv('app.version');
	getenv('endpoint.register');
	getenv('endpoint.login');
	getenv('endpoint.post');
}

initializeApp();