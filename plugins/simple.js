var utils = require('../lib/utils');

exports.init = function(irc, state, registerCommand) {
	registerCommand('8', 'Magic 8-ball. Ask it a question!', function(irc, client, args, channel, nick) {
		utils.sendMessage(irc, client, channel, nick, eightball_responses[Math.floor(Math.random()*eightball_responses.length)]);
	});

	registerCommand('now', 'Tells you what the current date and time are.', function(irc, client, args, channel, nick) {
		var current = new Date();
		var day = current.getDate();
		var month = current.getMonth();
		var year = current.getFullYear();
		var hours = current.getHours();
		var minutes = current.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;
		utils.sendMessage(irc, client, channel, nick, year + '-' + month + '-' + day + ' ' + hours + ':' + minutes);
	});
	
	registerCommand('dance', 'Make Stutbot dance!', function(irc, client, args, channel, nick) {
		utils.sendMessage(irc, client, channel, nick, ':D\\-<');
		utils.sendMessage(irc, client, channel, nick, ':D|-<');
		utils.sendMessage(irc, client, channel, nick, ':D/-<');
	});
	
	registerCommand('ping', 'Ping Stutbot.', function(irc, client, args, channel, nick) {
		utils.sendMessage(irc, client, channel, nick, 'Please don\'t do that again; it hurts!');
	});
	
	registerCommand('boogie', 'Make Stutbot dance!', function(irc, client, args, channel, nick) {
		utils.sendMessage(irc, client, channel, nick, 'As a g33k I don\'t boogie. I just stare at my feet, shuffle and wonder when I can go to the kitchen.');
	});
}

var eightball_responses = [
	'Signs point to yes.',
	'Yes.',
	'Reply hazy, try again.',
	'Without a doubt.',
	'My sources say no.',
	'As I see it, yes.',
	'You may rely on it.',
	'Concentrate and ask again.',
	'Outlook not so good.',
	'It is decidedly so.',
	'Better not tell you now.',
	'Very doubtful.',
	'Yes - definitely.',
	'It is certain.',
	'Cannot predict now.',
	'Most likely.',
	'Ask again later.',
	'My reply is no.',
	'Outlook good.',
	'Don\'t count on it.',
	'Yes, in due time.',
	'My sources say no.',
	'Definitely not.',
	'Yes.',
	'You will have to wait.',
	'I have my doubts.',
	'Outlook so so.',
	'Looks good to me!',
	'Who knows?',
	'Looking good!',
	'Probably.',
	'Are you kidding?',
	'Go for it!',
	'Don\'t bet on it.',
	'Forget about it.',
];
