module.exports = {
    name: 'ban',
    usage: 'ban @user',
    description: 'Ban the specified user from the server.',
    async execute(client, message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        if (member != null) {
            if (member === message.member || !member.bannable) {
                message.reply("You cannot ban this user.")
                    .then(message => message.delete({ timeout: 5000 }))
                    .catch(console.error);
            } else {
                message.mentions.members.first().send(`You were banned from the server ${message.guild.name} Reason: ${reason}`);
                message.mentions.members.first().ban({ reason: `${reason}`});
                message.reply("Banned successfully.")
                    .then(message => message.delete({ timeout: 5000 }))
                    .catch(console.error);
            }
        } else {
            message.reply("Usage: !ban @user.")
                .then(message => message.delete({ timeout: 5000 }))
                .catch(console.error);
        }
    },
};