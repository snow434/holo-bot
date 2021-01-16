const Discord = require('discord.js');
const config = require('./config.json')
const fs = require("fs");
const client = new Discord.Client({ disableMentions: 'everyone' });

client.config = config;
client.auditChannel = config["audit-channel"];
client.adminRoleNames= config.adminRoleNames;
client.moderatorRoleNames = config.moderatorRoleNames;

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands-enabled').filter(file => file.endsWith('.js'));
console.log(`Loading enabled commands: `);
for (const file of commandFiles) {
    const command = require(`./commands-enabled/${file}`);
    client.commands.set(command.name, command);
    console.log(command.name);
}

// Event file name must be the same as the name of the event defined in discord.js API.
client.events = new Discord.Collection();
const eventFiles = fs.readdirSync('./events-enabled').filter(file => file.endsWith('.js'));
console.log(`Loading enabled event handlers: `);
for (const file of eventFiles) {
    const event = require(`./events-enabled/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(eventName)
}

client.login(config.token);

module.exports = client;