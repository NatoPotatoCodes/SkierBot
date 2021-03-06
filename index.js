const Discord = require('discord.js');

const fs = require('fs');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Bot Online!');
});

 

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }
  else if(command == 'tree'){
        client.commands.get('tree').execute(message, args);
    }







});
    
client.login(token);
