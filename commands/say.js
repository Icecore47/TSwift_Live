const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
          
        var msg = message.content.substring(5);
        client.channels.get("477189452544999435").send(msg);
        message.channel.send("Sent "+ msg + " to Bot Channel");
        console.log(msg);


};

module.exports.help = {
    name: "Say"
}