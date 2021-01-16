module.exports = (client, ready) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.config.botStatus}`,
                    { type: `${client.config.botStatusType}` });
}