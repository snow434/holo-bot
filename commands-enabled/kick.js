module.exports = {
    name: 'kick',
    usage: 'kick @user',
    description: 'Kicks the specified user from the server.',
    async execute(client, message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        if (member != null) {
            if (member === message.member || !member.kickable) {
                message.reply("You cannot kick this user.")
                    .then(message => message.delete({ timeout: 5000 }))
                    .catch(console.error);
            } else {
                message.mentions.members.first().send(`You were kicked from the server ${message.guild.name} Reason: ${reason}`);
                message.mentions.members.first().kick({ reason: `${reason}`});
                message.reply("Kicked successfully.")
                    .then(message => message.delete({ timeout: 5000 }))
                    .catch(console.error);
            }
        } else {
            message.reply("Usage: !kick @user.")
                .then(message => message.delete({ timeout: 5000 }))
                .catch(console.error);
        }
    },
};