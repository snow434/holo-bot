const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: Deleted message")
        .setColor('#FF0000')
        .setThumbnail(message.author.avatarURL())
        .addField("Message author:", `${message.author.tag}`)
        .addField("Message content:", `${message.content}`)
        .addField("Deleted in:", `${message.channel}`)
        .addField("Deleted at:", `${message.createdAt}`)
        .setFooter("Holo-bot");

    const logChannel = message.guild.channels.cache.find(channel => channel.name === "log");
    if (!logChannel) return;

    logChannel.send(logEntry);

};