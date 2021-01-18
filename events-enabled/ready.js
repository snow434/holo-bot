module.exports = (client, ready) => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Currently online on: ${client.guilds.cache.array()}`)
    client.user.setActivity(`${client.config.botStatus}`,
                    { type: `${client.config.botStatusType}` });
}