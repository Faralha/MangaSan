const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const infoEmbed = new Discord.MessageEmbed()
    .setColor(1752220)
    .setTitle("- Info -")
    .addFields(
        {name: 'Creator / Author', value: "Created by Faralha / Myrmll#4643"},
        {name: 'Version', value: "Early Alpha v0.1"},
    )
    message.channel.send(infoEmbed)

}


module.exports.config = {
    name: "info",
    aliases: []
}