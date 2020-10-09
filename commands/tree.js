const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'tree',
    description: "Tree Command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
                .setTitle('Here is your tree')
                .setImage('https://images-ext-2.discordapp.net/external/0kAGccSI1v-1_huWn82ubj5yCRTOB-7GR6wUXgFQZd0/https/images-ext-2.discordapp.net/external/htbxdwnEFQL9GIsNLdYQQH1I7pQZGBPF18kSzAcoJDo/https/media.discordapp.net/attachments/761784680772272140/761789268397654036/hardwood-tree-400x266.png')
                .setColor(10181046)
                message.channel.send(embed);
        
    }
}
