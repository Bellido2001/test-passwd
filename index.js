const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '$';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`mining`, 'text').catch(e => { });

    }

    if (msg.content.startsWith(`${prefix}pass`)) {

        msg.delete()

        msg.channel.send("Contraseña generada: " + randomstring.generate(16));

    }


    

});

client.on('ready', async () => {
    console.log('lets mine!')

    let statuses = [
        
    ]

    
})

client.login('MTAwNDQzODk4MTgyNTUzMjAxNQ.GeH5PR.Re4Bf-J867Xqa2oI6iPofzwSfSTGb3PBB7JPCY')