const prefixModel = require("../models/prefix")

module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    }); 
    if(!args[0]) return message.channel.send('Please enter a valid command. Use help command for more info!')
    
}

module.exports.config = {
    name: "prefix",
    aliases: []
}