exports.config = {
	state_db: './stutbot.db',
	plugin_folder: './plugins/',
	plugin_check_interval: 3600,
	//oper: {
	//	user: 'frank',
	//	pass: 'grabthar\'s hammer',
	//},
	plugins: { },
};

exports.profiles = [{
	host: "irc.server.com",
	port: 6667,
	nick: 'stutbot',
	password: null,
	user: 'stutbot',
	real: 'Stutbot',
	channels: ["#stutbot-test"],
}];
