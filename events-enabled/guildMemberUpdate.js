const { MessageEmbed } = require("discord.js");

module.exports = (client, oldMember, newMember) => {

    if (oldMember.nickname != newMember.nickname) {
        const logEntry = new MessageEmbed()
            .setTitle("Event: User nickname change")
            .setColor("Yellow")
            .setThumbnail(oldMember.user.displayAvatarURL({ dynamic: true }))
            .addField("Before:", `Nickname: ${oldMember.nickname} - ${oldMember.user.tag}`)
            .addField("After:", `Nickname: ${newMember.nickname} - ${newMember.user.tag}`)
            .setTimestamp()
            .setFooter("Holo-bot");
        const logChannel = newMember.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
        if (!logChannel) {
            console.log(`Audit log channel not defined or not found.`);
        } else {
            logChannel.send(logEntry);
        }
    }
};
