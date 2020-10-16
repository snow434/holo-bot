const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: User joined the server")
        .setColor("Yellow")
        .setThumbnail(member.user.avatarURL())
        .addField("Username:", `${member.user.tag}`)
        .addField("On discord since:", `${member.user.createdAt}`)
        .setTimestamp()
        .setFooter("Holo-bot");

    const logChannel = member.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }
};
