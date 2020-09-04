function sendMessage (message) {
	console.log(message);
}

function sendMessages () {
	sendMessage("<< Main app >> - Initialize\nYour app must be initialized\n");
	sendMessage("<< Main app >> - Initialize\nYour app is being initialized\n");
	sendMessage("<< Main app >> - Initialize\nYour app has been initialized\n");

	sendMessage("<< Main app >> - Services\nYour app services must be initialized\n");
	sendMessage("<< Main app >> - Services\nYour app services is being initialized\n");
	sendMessage("<< Main app >> - Services\nYour app services has been initialized\n");

	sendMessage("<< Main app >> - Dependencies\nYour app dependencies must be initialized\n");
	sendMessage("<< Main app >> - Dependencies\nYour app dependencies is being initialized\n");
	sendMessage("<< Main app >> - Dependencies\nYour app dependencies has been initialized\n");

	sendMessage("<< Backup >> - Initialize\nYour backup must be initialized\n");
	sendMessage("<< Backup >> - Initialize\nYour backup is being initialized\n");
	sendMessage("<< Backup >> - Initialize\nYour backup has been initialized\n");
}

sendMessages();