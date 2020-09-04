const sendMessage = (title, section, message) =>
	console.log(`<< ${title} >> - ${section}\n${message}\n`);

// Currying so you can minimize work when calling repeated messages
const appMessage = (section, message) => sendMessage("Main app", section, message);
const backupMessage = (section, message) => sendMessage("Backup", section, message);

// Section messages
const initializeMessage = (message) => appMessage("Initialize", message('app'));
const servicesMessage = (message) => appMessage("Services", message);
const dependenciesMessage = (message) => appMessage("Dependencies", message);
const backupInitializeMessage = (message) => backupMessage("Initialize", message);

// Steps of the process
const steps = (method) => {
	method((object) => `Your ${object} must be initialized`);
	method((object) => `Your ${object} is being initialized`);
	method((object) => `Your ${object} has been initialized`);
}

/**
 * I know this is a little bit larger than the problematic version, but it also
 * scales much better with a lesser chance of bugs or inconsistencies across
 * the implementations
 */
function sendMessages () {
	steps(initializeMessage);
	steps(servicesMessage);
	steps(dependenciesMessage);

	backupInitializeMessage(backupInitializeMessage);
}

sendMessages();