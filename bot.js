const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://-ticket.glitch.me/`);
}, 280000);

// ?? ??????? ??? ???? ?????? ?? ?? ???
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); 

client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity(`Comeing Soon🔥`, { type: "WATCHING" });
});




client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  var num = args[1];
  var tax = 5; //غير قيمة الضريبة من هنا
  if (command == prefix + "tax") {
    let nume = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(command + " <number>");
    if (!num) {
      return message.channel.send(nume);
    }
    var numerr = Math.floor(num);
    if (numerr < 0 || numerr == NaN || !numerr) {
      return message.reply("**The value must be correct.**");
    }
    var taxval = Math.floor(numerr * (tax / 100));
    var amount = Math.floor(numerr - taxval);
    var amountfinal = Math.floor(numerr + taxval);
    let taxemb = new Discord.RichEmbed()
      .setTitle("Tax PoBot")
      .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
      .setDescription(`> **:moneybag: Final Result**: **${amountfinal}**`)
      .setTimestamp()
      .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL);
    message.channel.send(taxemb);
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor('RANDOM')
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "say1") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



   client.on("message", message => {
      if (message.content === "$help") {
  
       const embed = new Discord.RichEmbed() 
           .setColor("RANDOM")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __-tax__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-level__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$Bot__->**معلومات عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mb__->**حالة اعضاء السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ping__->**سرعة اتصالك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
     message.channel.send(embed)
     
     }
     });
client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
    
client.on('message', message => {

    if(message.content === prefix + "lock") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           })      
       const embed = new Discord.RichEmbed() 
           .setColor("RANDOM")
           .setDescription(`🔒** <#${message.channel.id}> has been locked.**`)
		        message.channel.send(embed)
                       
     
     
}

             

             
//FIRE BOT
 if(message.content === prefix + "unlock") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           })
       const embed = new Discord.RichEmbed() 
           .setColor("RANDOM")
           .setDescription(`🔓** <#${message.channel.id}> has been unlocked.**`)
		        message.channel.send(embed)
                       }
     });
     
          
             
             
                       
     
client.on('message', message => {
  if (message.content.startsWith(prefix + 'linkbot')) {
    var mentionned = message.mentions.users.first();
    var mrx;
      if(mentionned){
          var mrx = mentionned; } else {
          var mrx = message.author;
      }
      if(!mentionned.bot) return message.reply("الشخص الذي منشنته ليس بوت");
      if(!mentionned) return message.reply("منشن البوت");
      let alpha = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Link Bot`)
      .setURL(`https://discordapp.com/oauth2/authorize?client_id=${mrx.id}&scope=bot&permissions=8`)
      .setThumbnail(mrx.avatarURL)
      .setFooter(`- Requested By: ${message.author.tag}`)
      message.channel.sendEmbed(alpha);
  }
});

      client.on('message', async message => {//Narox
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);//Narox
  if(message.content.startsWith(prefix + "invite")) {
    if(!args) return message.reply('**Select an invitation name**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);//Narox
      if(!inv) return message.reply(`**I could not find ${args}**`);
      var iNv = new Discord.RichEmbed()//Narox
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)//Narox
      .addField('# - The owner of the invitation',inv.inviter,true)
      .addField('# - The invitation Room',inv.channel,true)//Narox
      .addField('# - The end date of the invitation',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - Invitation created',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - Duration of the invitation',moment(inv.maxAge).format('DD **hour** h **day**'),true)
      .addField('# - Uses',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);//Narox
    });//Narox
  }
});

