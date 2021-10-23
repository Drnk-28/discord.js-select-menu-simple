const { Client, Collection } = require("discord.js");

const client = new Client({
   /* messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto", */
    allowedMentions: {
        parse: ["roles", "users"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
})

module.exports = client

client.commands = new Collection()
client.slashCommands = new Collection()
client.config = require("./config")

// most people use handler like below
require("./handler/mongoose")(client) // delete this if you don't want it
require("./handler/command")(client) 


// login
client.login(process.env.token)

/*
 * @INFO simple code with no error
 * 
 * @INFO https://github.com/FuadJTM/discord.js-select-menu-simple
 * /
