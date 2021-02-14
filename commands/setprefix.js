const prefixModel = require("../models/prefix")

module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    if (!args[0]) return message.channel.send('What\'s the **new prefix**? Tell me!');

    if (args[0].length > 5) return message.channel.send('Sorry bro can\'t do more than \`5\` characters')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`Prefix Changed to **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`Prefix Changed to **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    aliases: []
}
