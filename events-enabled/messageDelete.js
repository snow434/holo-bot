const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {

    if (message.author.bot) return;
    const logEntry = new MessageEmbed()
        .setTitle("Event: Deleted message")
        .setColor('#FF0000')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addField("Message author:", `${message.author}`)
        .addField("Message content:", `${message.content}`)
        .addField("Deleted in:", `${message.channel}`)
        .addField("Deleted at:", `${message.createdAt}`)
        .setFooter("Holo-bot");

    const logChannel = message.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }

};