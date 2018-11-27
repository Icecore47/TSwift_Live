const Discord = require("discord.js");
const teams = require("../teams.json");
const players = require("../players.json");
const OW = require('overwatch-api');
const platform = 'pc';
const region = 'global';
const constants = require("../constants.json");
function getB_Tag(message) {


    for (var x = 0; x < players.Players.length + 0; x++) {

        var name = players.Players[x].Discord_Name;

        var tag = players.Players[x].Battle_Net;
        if (message.author.tag == name) {
            return tag;
        } else if (name == "EOF") {
            return "No Battle_Tag Found";
        }
    }
}

module.exports.run = async (bot, message, args) => {
     var serverembed;

    var user;
    var endr;

    const Battle_Tag = await getB_Tag(message);
    console.log(Battle_Tag);
    user = Battle_Tag.replace("#", "-");


    if (user != "No Battle Tag Found") {

        try {
            OW.getProfile(platform, region, user, (err, json) => {

                if (err) {
                    return "NA";
                } else {

                    endr = "endorsement level is " + json.endorsement.level + ":\n" +
                        json.endorsement.sportsmanship.rate + " sportsmanships, " + json.endorsement.teammate.rate +
                        " teammates, and " + json.endorsement.shotcaller.rate + " shotcallers"
                    var SR = json.competitive.rank;
                    var Level = json.level;
                    let sicon = message.author.avatarURL;
                    console.log(3);
                     serverembed = new Discord.RichEmbed()
                        .setDescription("Your Info")
                        .setColor("#15f153")
                        .setThumbnail(sicon)
                        .addField(" Discord Name", message.author.tag)
                        .addField("Battle Tag", Battle_Tag)
                        .addField("SR", SR)
                        .addField("Level", Level)
                        .addField("Endorements", endr)
                        .addField("Server Name", message.guild.name)
                        .addField("You Joined", message.member.joinedAt)

                }

            });
        }
        catch (Exception) {
            console.log("API gone and fcked up");
        }
        message.client.channels.get("477189452544999435").send(serverembed);




    } else {
        message.channel.send("Battle Tag Not found Please Contact Ice");
    }




}


module.exports.help = {
    name: "Join"
}