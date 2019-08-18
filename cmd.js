const Discord = require("discord.js");
var config = require("./config.json");
const prefix = ".";


commandIntervals = [];

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log("          Selfbot by Lars          ")
	console.log(`> User Login : ${bot.user.username} | ${bot.user.id}`)
})

bot.on('message', message => {
	let args = message.content.split(" ").slice(1);
	if (message.author === bot.user){


        if (message.content.startsWith(prefix + 'cmd')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("Command Panel")
            .setColor("#2f3136")
            .setThumbnail('https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2FeR7OEDQDyA7Cg%2Fsource.gif&imgrefurl=https%3A%2F%2Fgiphy.com%2Fgifs%2Ffighting-mugen-eR7OEDQDyA7Cg&docid=nvYfQmT6w0QnCM&tbnid=KsFcOW0M5sD8NM%3A&vet=1&w=500&h=280&bih=969&biw=1920&ved=0ahUKEwjburr4vtHjAhUFLKwKHbRfDvMQMwh2KAQwBA&iact=c&ictx=1')
						.addField(".raid", "Raid Commands")
            .addField(".admin", "Admin Commands")
            .addField(".user", "User Commands")
            .addField(".extra", "Extra Commands")
            .setFooter('Selfbot by Lars', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj84fuBv9HjAhUKM6wKHRvnAYkQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Ffighting-mugen-eR7OEDQDyA7Cg&psig=AOvVaw1p-PPapFMjC-5x9u88NUZr&ust=1564192946269917');




						message.channel.send(cmdList)
        }







        if (message.content.startsWith(prefix + 'raid')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("RAID COMMANDS")
            .setColor("#2f3136")
            .addField(".deletechannel", "Delete all Channels")
            .addField(".spam [text]", "Text Spammer")
            .addField(".stopspam", "Stop text Spam")
            .addField(".dmall [text]", "Send message to all members (bannable)")
            .addField(".deleterole", "Delete all roles")
            .addField(".banall", "Ball all members")
            .addField(".unbanall", "Unban all members")
            .addField(".rolesadd [text]", "Create roles")
            .addField(".channelsadd [text]", "Create channels")
            .addField(".modroleadd", "Add admin role")
            .addField(".renameall [text]", "Rename all members")
            .setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }

				if (message.content.startsWith(prefix + 'hack')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("HACK COMMAND")
            .setColor("#2f3136")
            .addField(".boot [ip]", "Boot IP")
            .addField(".iplog [link]", "N/A")
            .setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }
				if (message.content.startsWith(prefix + 'admin')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("ADMIN COMMANDS")
            .setColor("#2f3136")
            .addField(".kick [mention]", "Kick member")
            .addField(".ban [mention]", "Ban member")
            .addField(".clear [nb]", "Clear messages")
            .setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }
				if (message.content.startsWith(prefix + 'user')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("USER COMMANDS")
            .setColor("#2f3136")
            .addField(".stream [text]", 'streaming')
            .addField(".listen [text]", 'listening')
            .addField(".watch [text]", 'watching')
            .addField(".play [text]", 'playing')
            .addField(".stealpfp [mention]", 'steal pfp')
            .addField(".online", 'online')
            .addField(".away", 'away')
            .addField(".dnd", 'do not disturb')
            .addField(".invisible", 'invisible')
            .setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }
				if (message.content.startsWith(prefix + 'extra')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("EXTRA COMMANDS")
            .setColor("#2f3136")
            .addField(".say [text]", 'cool background')
            .addField(".ping", 'bot ping')
            .addField(".shutdown", 'selfbot off')
            .addField(".infos [mention]", 'person info')
            .addField(".serverinfos", 'server info')
            .addField(".nsfw", 'porn')
            .addField(".gif [text]", 'gif')
            .addField(".giflist", 'gif list')
            .setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }
				if (message.content.startsWith(prefix + 'deletechannel')){
			 message.delete()

    		message.guild.channels.forEach(channel => {

    		            channel.delete()

    		    });

    	}










    if (message.content.startsWith(prefix + "spam")) {
    if (message.deletable) message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1).join(" ");
    let inteval = setInterval(function () {
    message.channel.send(args)
	}, 0 * 1000);
    commandIntervals.push(inteval);
    }

    if (message.content === prefix + 'stopspam') {
    if (message.deletable) message.delete();
    commandIntervals.forEach(interval => {
    clearInterval(interval);
    });
    message.channel.send(':white_check_mark:');
    }


  if (message.content.startsWith(prefix + "dmall")) {
    message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
    message.guild.members.forEach(member => {
      member.send(args).catch(e => {});
    })
    message.channel.send("")
  }

    	if (message.content.startsWith(prefix + 'rolesadd')){
    		message.delete()
    		role = 0
    		while (role < 50){
            	test = args.join(" ")
            	message.guild.createRole( {
            	        name: `${LARS}`,
            	        color: "#2f3136",
            	    } )

            	role++;
    		}
    	}






    	if (message.content.startsWith(prefix + 'channelsadd')){
    		message.delete()
    		channeladd = 0
    		while (channeladd < 50){
    			message.guild.createChannel(`${args.join(" ")}`, "text");

    			channeladd++;
    		}
    	}




    	if (message.content.startsWith(prefix + 'modroleadd')){
    		message.delete()
            message.guild.createRole( {
                    name: "LARS",
                    permissions: [`ADMINISTRATOR`]
                } )
								const role = message.guild.roles.find('name', 'LARS');
								const role1 = message.guild.roles.find('name', 'LARS');
								message.member.addRole(role);
								message.member.addRole(role);
                message.channel.send("")


    	}










    	if (message.content.startsWith(prefix + 'renameall')){
    		message.delete()

        		message.guild.members.forEach(m => {
            		m.setNickname(`${args.join(" ")}`);
        		});
    	message.channel.send("")
    	}
			if (message.content.startsWith(prefix + "kick")) {
var member= message.mentions.members.first();
member.kick().then((member) => {
message.channel.send("").catch(() => {
message.channel.send("");
 })
 });
}
if (message.content.startsWith(prefix + "ban")) {
var member= message.mentions.members.first();
member.ban().then((member) => {
message.channel.send("").catch(() => {
message.channel.send("");
})
 });
 }
 if(message.content.startsWith(prefix + "clear")) {
     let args = message.content.split(" ").slice(1);
     let messagecount = parseInt(args[0]) || 999;
     var deletedMessages = -1;
     message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
         .then(messages => {
             messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
         }).then(() => {
             if (deletedMessages === -1) deletedMessages = 0;

         }).catch(console.error);
        }
				if (message.content.startsWith(prefix + 'stream')){
             message.delete()
             bot.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "STREAMING",
             url: "https://www.twitch.tv/larstx2"
             }
             });
             message.channel.send("")
            }


if (message.content.startsWith(prefix + 'listen')){
             message.delete()
             bot.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "LISTENING",
             url: "https://www.twitch.tv/larstx2"
             }
             });
             message.channel.send("")
            }

if (message.content.startsWith(prefix + 'watch')){
             message.delete()

             bot.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "WATCHING",
             url: "https://www.twitch.tv/larstx2"
             }
             });
             message.channel.send("")


            }




            if (message.content.startsWith(prefix + 'play')){
            message.delete()

            bot.user.setPresence({
            game: {
            name: `${args.join(" ")}`,
            type: "PLAYING",
            url: "https://www.twitch.tv/larstx2"
            }
            });
            message.channel.send("")


            }
if (message.content.startsWith(prefix + 'stealpfp')){
	message.delete()
	args[0] = message.mentions.members.first()
        	var usermentions = args[0]


const photosteal = new Discord.RichEmbed()
  .setColor('#2f3136')
.setThumbnail(usermentions.user.displayAvatarURL)
    .setDescription("")

bot.user.setAvatar(usermentions.user.displayAvatarURL);
message.channel.send(photosteal)

}
if (message.content.startsWith(prefix + 'online')){
message.delete()
bot.user.setStatus('online', 'LARS')
message.channel.send("")

}

		if (message.content.startsWith(prefix + 'deletechannel')){
			 message.delete()

    		message.guild.channels.forEach(channel => {

    		            channel.delete()

    		    });

    	}
			if (message.content.startsWith(prefix + 'away')){
message.delete()
bot.user.setStatus('idle', 'LARS')
message.channel.send("")

}
if (message.content.startsWith(prefix + 'dnd')){
message.delete()

bot.user.setStatus('dnd', 'LARS')
message.channel.send("")

}
if (message.content.startsWith(prefix + 'invisible')){
message.delete()
bot.user.setStatus('invisible', 'LARS')
message.channel.send("")

}
if (message.content.startsWith(prefix + 'say')){
            message.delete()
			let sayEmbed = new Discord.RichEmbed()
			.setDescription(`${args.join(" ")}`)
			.setColor("#2f3136")


			message.channel.send(sayEmbed)
		}
		if (message.content.startsWith(prefix + 'ping')){
answertime = new Date().getTime() - message.createdTimestamp + " ms"
message.delete()
  message.channel.send("Pong!`" + answertime + "`");

}
if(message.content == "/shutdown"){
message.channel.send("Selfbot Shutting down...")

process.exit()

    }
		if (message.content.startsWith(prefix + 'infos')){
             message.delete()
        	args[0] = message.mentions.members.first()
        	var usermentions = args[0]

        	let userPpEmbed = new Discord.RichEmbed()
        	.setDescription(`__Information of ${args[0]}__`)
        	.setImage(usermentions.user.displayAvatarURL)
        	.addField(`__ID :__`, `${usermentions.id}`)
            .addField(`__Account creation date : __`, `${usermentions.user.createdAt}`)


        	.setColor("#2f3136")

        	message.channel.send(userPpEmbed)
		}
		if (message.content.startsWith(prefix + 'serverinfos')){
message.delete()

function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };

    const embed = new Discord.RichEmbed()
    .setColor("#2f3136")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("__Name:__", message.guild.name, true)
        .addField("__ID:__", message.guild.id, true)
        .addField("__Owner:__", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("__Region:__", region[message.guild.region], true)
        .addField("#=Total** | **Members** | **bots=#", `${message.guild.members.size} total of members | ${message.guild.members.filter(member => !member.user.bot).size} members | ${message.guild.members.filter(member => member.user.bot).size} bots`, true)
        .addField("__Channels:__", message.guild.channels.size, true)
        .addField("__Roles:__", message.guild.roles.size, true)
        .addField("__Creation Date:__", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
.setFooter('Selfbot by Lars');



    message.channel.send(embed);
}
if (message.content.startsWith(prefix + 'nsfw')){
message.delete()

var facts = ["https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/08/22/620/19870202.gif", "https://images.sex.com/images/pinporn/2018/09/15/300/19961813.gif", "https://images.sex.com/images/pinporn/2015/09/10/300/13754835.gif", "https://images.sex.com/images/pinporn/2017/01/21/300/17249541.gif", "https://images.sex.com/images/pinporn/2017/08/01/620/18138441.gif", "https://images.sex.com/images/pinporn/2016/08/12/300/16353120.gif", "https://images.sex.com/images/pinporn/2016/12/01/300/16986053.gif", "https://images.sex.com/images/pinporn/2015/06/16/300/12384930.gif", "https://images.sex.com/images/pinporn/2015/02/25/300/10674867.gif", "https://images.sex.com/images/pinporn/2015/03/05/300/10798795.gif", "https://images.sex.com/images/pinporn/2018/01/18/300/18968653.gif", "https://images.sex.com/images/pinporn/2015/04/13/300/11418564.gif", "https://images.sex.com/images/pinporn/2018/03/11/300/19228958.gif", "https://images.sex.com/images/pinporn/2017/03/26/300/17542758.gif", "https://images.sex.com/images/pinporn/2016/04/14/300/15473256.gif", "https://images.sex.com/images/pinporn/2016/04/29/300/15580403.gif", "https://images.sex.com/images/pinporn/2016/08/04/300/16295970.gif", "https://images.sex.com/images/pinporn/2014/07/30/300/7207430.gif", "https://images.sex.com/images/pinporn/2015/08/08/300/13447343.gif", "https://images.sex.com/images/pinporn/2018/02/28/300/19178824.gif", "https://images.sex.com/images/pinporn/2016/04/28/300/15573328.gif", "https://images.sex.com/images/pinporn/2015/05/04/300/11767290.gif", "https://images.sex.com/images/pinporn/2017/01/27/300/17276843.gif", "https://images.sex.com/images/pinporn/2016/01/10/300/14746220.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif", "https://images.sex.com/images/pinporn/2018/01/26/300/19008297.gif"];
var fact = Math.floor(Math.random() * facts.length);



const nsfwembed = new Discord.RichEmbed()
    .setColor('#2f3136')
    .setImage(facts[fact])
    message.channel.send(nsfwembed);

}
if (message.content.startsWith(prefix + 'giflist')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setTitle("#=GIF LIST=#")
            .setColor("#2f3136")
            .setDescription("`issou`, " + "`pissou`, " + "`wissou`, " + "`epilypsy`, " + "`peveryone`, " + "`genius`, " + "`rage`, " + "`fbi`, " + "`hide`, " + "`party`, ")
.setFooter('Selfbot by Lars');




            message.channel.send(cmdList)
        }
				if (message.content.startsWith(prefix + 'gif')){

    if (message.content != prefix + "giflist") {



    if (args.join("") === "pissou"){


    const pissougif = new Discord.RichEmbed()
    .setColor('#2f3136')
    .setImage('https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif')


    message.delete();
    message.channel.send(pissougif)




    } else if (args.join("") === "wissou"){


  const wissougif = new Discord.RichEmbed()
  .setColor('#2f3136')
  .setImage('https://media.tenor.com/images/bfe59a4eaa8fb8f0aa55a9c8f24f1cd3/tenor.gif')


  message.delete();
  message.channel.send(wissougif)



    }else if (args.join("") === "epilepsy"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://i.pinimg.com/originals/d4/07/3d/d4073dedf2a9a4bcb9e9343dcb02900a.gif')



    message.delete();
    message.channel.send(issougif)



    } else if (args.join("") === "hide"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://i.makeagif.com/media/1-17-2016/kYqDeN.gif')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "genius"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif ')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "rage"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://media.discordapp.net/attachments/567461299198492683/567969475681320960/inconnu.gif')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "party"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif ')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "peveryone"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://cdn.discordapp.com/attachments/569173692060532755/572530862789492736/be8.gif')



    message.delete();
    message.channel.send(issougif)



    } else if (args.join("") === "fbi"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif ')



    message.delete();
    message.channel.send(issougif)



    }




   else if (args.join("") === "issou"){



    const issougif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')



    message.delete();
    message.channel.send(issougif)



    }


    else {



    const nogif = new Discord.RichEmbed()
    .setColor('#2f3136')

    .addField("ERROR 404: `" + args.join("") + "` \nThere is no gif associated with this name, you can see the list of gifs with:" ,"```/giflist```")



    message.delete();
    message.channel.send(nogif)

    }



    }



}
if (message.content.startsWith(prefix + 'lol')){
					 message.delete()
					 let sayEmbed = new Discord.RichEmbed()
					 .setColor("#EA000D")
					 .setURL(`${args.join(" ")}`)
					 .setTitle('Click here')



					 message.channel.send(sayEmbed)
			 }
			 if (message.content.startsWith(prefix + 'bot')){
     		message.delete()
     		channeladd = 0
     		while (channeladd < 1){
     			message.channel.createWebhook(`${args.join(" ")}`, "https://cdn-images-1.medium.com/max/599/1*EKIOEDfIunCnzQxo85NrRg.jpeg");

     			channeladd++;
     		}
     	}
			if (message.content.startsWith(prefix + 'ip')){
    		message.delete()
				Client.lookup(address.join(" "))

				let sayEmbed = new Discord.RichEmbed()
				.setColor("#EA000D")
				.setURL("https://ipinfo.io/" + `${args.join(" ")}`)
    		.setTitle('IP informations')


				message.channel.send(sayEmbed)
		}
		if (message.content.startsWith(prefix + 'test')){
			message.delete()
			client.lookup(address.join(" "));
	}








			}



		 else { return;}



		 });

		 bot.login(config.token)
