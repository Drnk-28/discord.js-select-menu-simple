const client = require("../index");

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return
  
  if(!message.content.startsWith(client.config.prefix)) return
  const [cmd, ...args] = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))
  
  if(command.owner == true ) {
    if(!client.config.ownerID.includes(message.author.id)) return message.reply("💢 sorry this command is only for admin bot")
  }
  
  if (!command) return
  await command.run(client, message, args)
})

/*
 *
 * @INFO http://github.com/FuadJTM/discord.js-select-menu-simple
 *
 */
