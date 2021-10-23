// code by FuadJTM 
const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "dropdown",
  aliases: [],
  usage: "b!dropdown",
  description: "This is just a test, if there is an error I apologize",
  owner: true,
  
  run: async (client, message, args) => {
    
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("test") // this is the id i made in ../../events/interactionCreate
      .setPlaceholder('click here')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label:"values Halo" ,
          description:"test halo",
          value:"halo",
          emoji:"👋" // This can also be replaced with a custom emoji
        },
        {
          label:"values hah",
          description:"test hah",
          value:"hah",
          emoji:"😱" // Same as above
        },
        
        ])
      )
    
    const embed = new MessageEmbed ()
    .setTitle("Select Menu")
    .setDescription("select the menu below")
    .setColor("RANDOM")
    
    message.channel.send({embeds: [embed], components: [row]})
    
  }
}
