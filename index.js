const Discord = require("discord.js");
const { pipeline } = require("stream");

const Canvas = require("canvas")

const Discord = require ("discord.js")

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTk4MTQzMDg3NjA1OTg1MzYw.GjX_ST.AHzUg7zOtWnhTNStjH10egeuPETQuhUEz4ftcE")

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé.");
    Client.channels.cache.get("998141336198852611").send("<@"+ member.id + "est arrivé :D !__")

    var canvas = Canvas.createCanvas

});

Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur.")
    Client.channels.cache.get("998141336198852611").send(member.discplayName + "__a quitté le serveur :'( !__")
});

Client.on("messageCreate",message => {
    if (message.author.bot) return;

    //!ping
    if(message.content === prefix + "ping"){
            message.reply ("pong !");

    }
    //help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor ("YELLOW")
            .setTitle ("**__Liste des commandes__**");

        message.channel.send({ embeds : [embed]});
    }
});