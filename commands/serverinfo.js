const Discord = require("discord.js");
const constants = require("../constants.json");


  

module.exports.run = async (client, message, args) => {
  
    var admin
    for (var t = 0; t < constants.Admin + 0; t++) {
        if (message.author.tag == constants.Admin[t])
            admin = true
    }
  
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

       if (admin==true)
    { message.channel.send.send(serverembed);}
    else
    {  client.channels.get("477189452544999435").send(serverembed);}
}

module.exports.help = {
  name:"serverinfo"
}