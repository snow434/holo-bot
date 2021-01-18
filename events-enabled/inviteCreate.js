const { MessageEmbed } = require("discord.js");

module.exports = (client, invite) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: Invite Created")
        .setColor('#FF0000')
        .addField("Invite author:", `${invite.inviter}`)
        .addField("Invited to channel:", `${invite.channel}`)
        .addField("Invite link:", `${invite.url}`)
        .addField("Created at:", `${invite.createdAt}`)
        .addField("Temporary:", `${invite.temporary}`)
        .addField("Created at:", `${invite.expiresAt}`)
        .setFooter("Holo-bot");

    const logChannel = invite.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }

};