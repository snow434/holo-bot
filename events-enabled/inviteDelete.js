const { MessageEmbed } = require("discord.js");

module.exports = (client, invite) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: Invite Deleted")
        .setColor('#FF0000')
        .setFooter("Holo-bot");

    const logChannel = invite.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }

};