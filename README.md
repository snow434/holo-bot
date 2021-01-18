# Holo-bot

## About
Holo-bot is an easily extensible Discord bot, aiming to help with server management.  
Currently in early development stage.

## Features

### Audit log
- Deleted messages
- Edited messages
- Users joining and leaving the server
- Track username and discord tag changes.
- TBD
### Commands
- Kick
- Ban
  
## Installation
Pre requisites `nodejs >= 12.0, npm`  
<br>
Clone git repository
```
git clone https://github.com/snow434/holo-bot.git
```
Run
```
npm install
```

## Setup
Rename `config-example.json` to `config.json`.
Go to Discord Developer Portal https://discordapp.com/developers/applications/ and get your bot token.
Replace `"token": "your-token-here"` with your own.
```json
{
	"prefix": "!",
	"token": "your-token-here",
	"auditChannel": "audit-log",
	"roles": ["Admin", "Administrator", "Owner", "Mod", "Moderator"],
	"botStatus": "over you",
	"botStatusType": "WATCHING"
}
```
Optionally adjust `auditChannel` and `roles` according to your server settings.

Once you finish setting up config.json start the bot with
```
node app.js
```
or alternatively use PM2 (recommended)<br> https://discordjs.guide/improving-dev-environment/pm2.html#installation

To disable/enable events and commands drag the .js files between -enabled/-disabled folders.

## TODO
Planned features:
* Rest of discord.js API Events
* Ban,kick,warn,etc. commands

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.
