const { MessageEmbed } = require("discord.js");

module.exports = (client, channel) => {

    const logEntry = new MessageEmbed()
        .setTitle("Event: Channel deleted")
        .setColor("Red")
        .addField("Channel name:", `${channel.name}`)
        .setTimestamp()
        .setFooter("Holo-bot");

    const logChannel = channel.guild.channels.cache.find(channel => channel.name === client.config.auditChannel);
    if (!logChannel) {
        console.log(`Audit log channel not defined or not found.`);
    } else {
        logChannel.send(logEntry);
    }
};
