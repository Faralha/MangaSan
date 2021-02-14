const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const {
    loadCommands
} = require('./utils/loadCommands');
const mongoose = require('mongoose');
//Declare mongoose module
const prefix = require('./models/prefix');
const {token} = require('./config.json');

mongoose.connect('MongoDBKeyHere', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.login(token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

client.on('ready', () =>{
    console.log("Bot is Online!");
    function randomStatus() {
        let status = ["Daddy OwO", "Alpha Build by Faralha", "Few Command, Lot of bug", "Eye penetration is kinda fucked up ngl"]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "LISTENING"});
    }; setInterval(randomStatus, 15000)
})

client.on('message', async (message) => {
    if (message.author.bot) return;

    //Ngambil data dari cloud
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //Kalo ada data sebelumny, prefix itu yang dipake. Klo gaada, pakainy prefix default
    if(data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    } else if (!data) {
        //Prefix default dsini
        const prefix = "!";
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    }
})


//btw ini bukan kode gw. All credit goes to DashCruft UwU