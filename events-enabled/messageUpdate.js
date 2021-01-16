const { MessageEmbed } = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {

    // Avoid error: "MessageEmbed field values may not be empty." 
    // Event messageUpdate gets triggered on every MessageEmbed post.
    // This prevents the function from running again and referring to no longer existing oldMessage.
    if (oldMessage.author.bot) return;

    const logEntry = new MessageEmbed()
        .setTitle("Event: Edited message")
        .setColor("Yellow")
        .setThumbnail(oldMessage.author.displayAvatarURL({ dynamic: true }))
        .addField("Message author:", `${oldMessage.author}`)
        .addField("Message content before:", `${oldMessage.content}`)
        .addField("Message content after:", `${newMessage.content}`)
        .addField("Edited in:", `${oldMessage.channel}`)
        .addField("Edited at:", `${newMessage.createdAt}`)
        .setFooter("Holo-bot");

    const logChannel = oldMessage.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel)
        console.log(`Audit log channel not defined or not found.`);
    if (oldMessage.content != newMessage.content) {
        logChannel.send(logEntry);
    } else {
        return;
    }

};
