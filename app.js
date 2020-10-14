const Discord = require('discord.js');
const config = require('./config.json')
const fs = require("fs");
const client = new Discord.Client({ disableEveryone: true });
client.config = config;


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands-enabled').filter(file => file.endsWith('.js'));
console.log(`Loading commands: `);
for (const file of commandFiles) {
    const command = require(`./commands-enabled/${file}`);
    client.commands.set(command.name, command);
    console.log(command.name);
}


client.events = new Discord.Collection();
const eventFiles = fs.readdirSync('./events-enabled').filter(file => file.endsWith('.js'));
console.log(`Loading event handlers: `);
for (const file of eventFiles) {
    const event = require(`./events-enabled/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(eventName)
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("over you.", { type: `WATCHING` });
});


client.login(config.token);

module.exports = client;