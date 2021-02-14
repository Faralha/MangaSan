const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor(1752220)
    .setTitle("All Command List")
    .addFields(
        { name : 'setprefix', value : 'Change the bot prefix to whatever u like :)'},
        { name : 'test', value : 'Test if the bot is working or not lol'},
    )

    if(!args[0]) return message.channel.send(helpEmbed)
 
    
}

module.exports.config = {
    name: "help",
    aliases: []
}