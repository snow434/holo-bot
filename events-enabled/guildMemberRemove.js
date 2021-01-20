const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: User left the server")
        .setColor("Yellow")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addField("Username:", `Nickname: ${member.nickname} \nDiscord tag: @${member.user}`)
        .setTimestamp()
        .setFooter("Holo-bot");

    const logChannel = member.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }
};
