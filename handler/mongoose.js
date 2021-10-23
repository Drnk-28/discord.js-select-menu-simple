const mongoose = require("mongoose")

module.exports = async (client) => {
  
  mongoose.connect(client.config.mongodb).then(() => {
   console.log("mongodb - connected")
  }).catch(err => {
    console.error(`mongodb - error\n${err}`)
  })
}
