const Discord = require("discord.js");
const constants = require("../constants.json");

module.exports.run = async (client, message, args) => {

    
      client.channels.get("477189452544999435").send(constants.TSsen[Math.floor((Math.random() * constants.TSsen.length))]);


};

module.exports.help = {
    name: "Taylor"
}