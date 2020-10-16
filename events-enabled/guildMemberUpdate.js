const { MessageEmbed } = require("discord.js");

module.exports = (client, oldMember, newMember) => {

    if(oldMember.user.nickname != newMember.user.nickname) return;
    const logEntry = new MessageEmbed()
        .setTitle("Event: User nickname change")
        .setColor("Yellow")
        .setThumbnail(oldMember.user.avatarURL())
        .addField("Before:", `Nickname: ${oldMember.nickname} \nDiscord tag: @${oldMember.user.tag}`)
        .addField("After:", `Nickname: ${newMember.nickname} \nDiscord tag: @${oldMember.user.tag}`)
        .setTimestamp()
        .setFooter("Holo-bot");

    const logChannel = newMember.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }
};
