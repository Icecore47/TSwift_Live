const Discord = require("discord.js");
const Maps = require("../map.json");

module.exports.run = async (client, message, args) => {

    
    switch (args.toString()) {

        case "Assault":
            client.channels.get("477189452544999435").send("Your Assault Map is : " + Maps.Assault[Math.floor((Math.random() * Maps.Assault.length))]);
            break;
        case "Escort":
            client.channels.get("477189452544999435").send("Your Escort Map is : " + Maps.Escort[Math.floor((Math.random() * Maps.Escort.length))]);
            break;
        case "Hybrid":
            client.channels.get("477189452544999435").send("Your Hybrid Map is : " + Maps.Hybrid[Math.floor((Math.random() * Maps.Hybrid.length))]);
            break;
        case "Control":
            client.channels.get("477189452544999435").send("Your Control Map is : " + Maps.Control[Math.floor((Math.random() * Maps.Control.length))]);
            break;
        default:
            client.channels.get("477189452544999435").send(" Since you Didnt select a map type or you entered it wrong, Here ia a random map: \n " + Maps.All[Math.floor((Math.random() * Maps.All.length))]);
            break

    }

};

module.exports.help = {
    name: "Maps"
}
