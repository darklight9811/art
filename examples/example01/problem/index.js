const env = require(`./env.json`);

function initializeApp () {
	try {
		const appname = env.app_name;
		if (!appname) throw new Error("App name is undefined");
		console.log("App name is " + appname);
	}
	catch(e) {
		console.warn(e);
	}
	try {
		const appdescription = env.app_description;
		if (!appdescription) throw new Error("App description is undefined");
		console.log("App description is " + appdescription);
	}
	catch(e) {
		console.warn(e);
	}
	try {
		const app_version = env.app_version;
		if (!app_version) throw new Error("App version is undefined");
		console.log("App version is " + app_version);
	}
	catch(e) {
		console.warn(e);
	}
	try {
		const register = env.endpoint_register;
		if (!register) throw new Error("App endpoint register is undefined");
		console.log("App endpoint register is " + register);
	}
	catch(e) {
		console.warn(e);
	}
	try {
		const login = env.endpoint_login;
		if (!login) throw new Error("App endpoint login is undefined");
		console.log("App endpoint login is " + login);
	}
	catch(e) {
		console.warn(e);
	}
	try {
		const post = env.endpoint_post;
		if (!post) throw new Error("App endpoint post is undefined");
		console.log("App endpoint post is " + post);
	}
	catch(e) {
		console.warn(e);
	}
}

initializeApp();