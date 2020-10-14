const { MessageEmbed } = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {

    if (oldMessage.author.bot) return;
    const logEntry = new MessageEmbed()
        .setTitle("Event: Edited message")
        .setColor("Yellow")
        .setThumbnail(oldMessage.author.avatarURL())
        .addField("Message author:", `${oldMessage.author}`)
        .addField("Message content before:", `${oldMessage.content}`)
        .addField("Message content after:", `${newMessage.content}`)
        .addField("Edited in:", `${oldMessage.channel}`)
        .addField("Edited at:", `${newMessage.createdAt}`)
        .setFooter("Holo-bot");

    const logChannel = oldMessage.guild.channels.cache.find(channel => channel.name === "log");
    if (!logChannel) 
        console.log(`Log channel not defined or not found.`);
    if (oldMessage.content != newMessage.content) {
        logChannel.send(logEntry);
    } else {
        return;
    }
};
