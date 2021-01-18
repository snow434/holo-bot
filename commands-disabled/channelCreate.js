const { MessageEmbed } = require("discord.js");

module.exports = (client, channel) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: Channel created")
        .setColor("Green")
        .addField("Channel name:", `${channel.name}`)
        .addField("Created at:", `${channel.createdAt}`)
        .setTimestamp()
        .setFooter("Holo-bot");

    const logChannel = channel.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }
};
