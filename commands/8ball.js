const Discord = require("discord.js");
const constants = require("../constants.json");

module.exports.run = async (client, message, args) => {
    var admin
    for (var t = 0; t < constants.Admin + 0; t++) {
      console.log(message.author.tag,constants.Admin[t]);
        if (message.author.tag == constants.Admin[t])
            admin = true
    }

    var msg = message.toString().substring(7);
    let serverembed = new Discord.RichEmbed()
        .setDescription(message.author.tag)
        .setColor("#15f153")
        .addField("❓Your Question❓: ", msg)
        .addField("🎱Answer🎱 ", constants.BallAnswers[Math.floor((Math.random() * constants.BallAnswers.length))])



    if (admin==true)
    { message.channel.send.send(serverembed);}
    else
    {  client.channels.get("477189452544999435").send(serverembed);}

};


module.exports.help = {
    name: "8ball"
}

