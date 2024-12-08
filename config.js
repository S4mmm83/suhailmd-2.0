const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_22_21_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBXMW8zbGdldndNZGdHYStYUjFDdEZhMkVZR1BtMU9jb0FkTEVBZ2hSZTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5NDQzNjMzNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY3QTI4QkU5Q0UxRjRBNUE5OURBNTlDMzYwNzM1QjZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY5NjQ2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ0MzYzMzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0M0QxODIyQTgxQ0I4NDM2OEE1RUI1NjdDNEU4NDlGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2OTY0NjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiB0cnVlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyYm5LRnZDNFF4RzM2eFZWSTYzWlNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4N2E2YTk3LThhMjAtNGM4Zi1hZTQzLWJmY2Q1ZDRhZDY1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDY5LFxuICAgICAgMTMxLFxuICAgICAgMTM4LFxuICAgICAgMTQsXG4gICAgICA1OCxcbiAgICAgIDQ2LFxuICAgICAgMjAzLFxuICAgICAgNSxcbiAgICAgIDEzNixcbiAgICAgIDE5NSxcbiAgICAgIDIxNCxcbiAgICAgIDIwOSxcbiAgICAgIDE3MSxcbiAgICAgIDIzNSxcbiAgICAgIDQ0LFxuICAgICAgMTY2LFxuICAgICAgMTU5LFxuICAgICAgMzMsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNTQsXG4gICAgICAxNTIsXG4gICAgICAxNTMsXG4gICAgICAxNDAsXG4gICAgICAxMjIsXG4gICAgICAyMTMsXG4gICAgICA2MCxcbiAgICAgIDQzLFxuICAgICAgMyxcbiAgICAgIDI0NCxcbiAgICAgIDQ5LFxuICAgICAgNDQsXG4gICAgICAyMTAsXG4gICAgICA1OSxcbiAgICAgIDE3NSxcbiAgICAgIDE1NyxcbiAgICAgIDQ4LFxuICAgICAgOTQsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjI4OTlIUThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ0MzYzMzYzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUzRtXCIsXG4gICAgXCJsaWRcIjogXCIyNTAxOTQ5NjQ4MDM2NjE6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkgvc3RVQ0VNbTMyTG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxa3RScVpFeUhFbkdqME9QSGpzVEZJQjBNUTQ3Umdqa2lXeFVIRkNtaWg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlU0UkZwbVpLNG5JSEFLdTZVNXhXQjJidXVTMnZmMGtCb2NGbUprSk5Ob1VUKzVBZTBwcm02cTR0YmxKdmFmZUFJVURubzFSVjlPVFdLaFZORVZHMUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlwa05abWJidzF2T1hmTStaMDVINnZiL1BGUzhOd2VOQ2J1a2xPeklWYXJwYW1BVVpSZTJkYm9LSS9wa2Y2ek9WTXdyNklQUW1BaXl1c2lVUENocERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ0MzYzMzYzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY5NjQ2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpFdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkV1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibTBwZHVzVlVkQm8zbG1hOEsxZmVBd3d5cXllNU0reUpTbXBpcEhuRGxEcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTU5NjQzMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY5NTgwOTUwNFwifSIKfQ==// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
