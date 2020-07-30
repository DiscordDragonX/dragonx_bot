const http = require('http');                                    
const express = require('express');                              
const app = express();                                           
app.use(express.static('public'));                               
app.get("/", function (request, response) {                      
  response.sendFile(__dirname + '/views/index.html');            
});                                                              
app.get("/", (request, response) => {                            
  response.sendStatus(200);                                      
});                                                              
app.listen(process.env.PORT);                                    
setInterval(() => {                                                
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   
}, 280000);                                                    

//Aquí empiezas a escribir el código :) #TeamYupi

const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "yby!";

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.debug(e));

//EVENTO READY

client.on("ready", () => {

console.log(`En marcha!,
conectado en ${client.guilds.size} servidores y ${client.users.size} usuarios`);

client.user.setPresence( { 
status: "online", //idle
game: {
name: `Prefix: yby! | Estoy en ${client.guilds.size} servidores y ${client.users.size} usuarios`,
  type: "PLAYING"



}

});

});

//EVENTO MESSAGE

client.on('message', async (message) => {

if(message.author.bot) return;

    let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();
  
   if(!message.content.startsWith(prefix)) return;
  try { 
  let commands = require(`./commands/${command}.js`);
  if (!commands) return;
  commands.run(client, message, args);
  } catch (e) {
  console.log(e.stack);
  
  
  } 

});


client.login(process.env.TOKEN)
