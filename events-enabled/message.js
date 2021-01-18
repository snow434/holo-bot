module.exports = (client, message) => {

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Do not respond to direct messages.
    // Respond to commands comming only from defined roles
    // Respond only to messages starting with "!" ex. !help
    // Make client ignore its own or other clients messages.
    if (message.channel.type === "dm" || message.author.bot || !message.content.startsWith(client.config.prefix)) return;

    if (message.member.roles.cache.some(role =>(client.roles).includes(role.name))) {
        try {
            client.commands.get(command).execute(client, message, args);
        } catch (error) {
            console.error(error);
            message.reply("There was an error while trying to execute that command!")
                .then(message => message.delete({ timeout: 5000 }))
                .catch(console.error);
        }
    } else {
        message.reply("You dont have permissions for that.")
            .then(message => message.delete({ timeout: 5000 }))
            .catch(console.error);
    }
};

