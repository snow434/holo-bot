module.exports = (client, message) => {


        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (message.channel.type === "dm") return;                              // Do not respond to direct messages.
        if (!message.member.roles.cache.some(role => role.name === 'Admin')) {  // Respond to commands comming only from defined roles
            if (!message.content.startsWith(client.config.prefix)) return;             // Respond only to messages starting with "!" ex. !help
            if (message.author.client) return;                                     // Make client ignore its own or other clients messages.

            if (!client.commands.has(command)) return;

            try {
                client.commands.get(command).execute(client, message, args);
            } catch (error) {
                console.error(error);
                message.reply('there was an error while trying to execute that command!');
            }

        } else {
            return;
        }
    };

