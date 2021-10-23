const { MessageEmbed } = require("discord.js")
const client = require("../index.js")

client.on("interactionCreate", async (interaction) => {
  try {
  if(!interaction.isSelectMenu()) return
  
  if(interaction.customId === "test") {
    
    let message = await interaction.channel.messages.fetch(interaction.message.id)
    let value = interaction.values
    
    if(value[0] === "halo") {
      await interaction.deferUpdate()
      
      const embed = new MessageEmbed()
      .setTitle("Value Halo")
      .setDescription("ini valuenya halo")
      .setColor("RANDOM")
      
      await message.edit({embeds: [embed]})
      
    } else if(value[0] === "hah") { 
      await interaction.deferUpdate()
      
      const embed = new MessageEmbed ()
      .setTitle("Value Hah")
      .setDescription("inivaluenya hah")
      .setColor("RANDOM")
      
      await message.edit({embeds:[embed]})
    } 
    
  }
  
  // if error
  } catch(e) {
    console.error(e)
    interaction.followUp({content: e.message, ephemeral: true})
  }

})
 /*
  * @INFO if you want to try it, use value with a different name
  *
  * @INFO make a select menu for your discord server
  * 
  * @INFO https://github.com/FuadJTM/discord.js-select-menu-simple
  */
