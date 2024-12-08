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


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_22_10_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvUUNQaUYwdjhqQU9NcXJpVXA3RmdjN0NkRklEaXg4SXNQS2VkUDFJckdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ0MzYzMzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NjFDQjIyMDIxMDhBQzE1MEFBOEJBMkQyRDAyMTU5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2OTU4MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicDU0ZHNXVDVTZ1NtMGdmZk9ZLTRRZ1wiLFxuICBcInBob25lSWRcIjogXCJiMTc3NGE4OC1jZDBhLTQ2ZGEtYTZjNi0wMjhjYmE5YzllYjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAwLFxuICAgICAgNSxcbiAgICAgIDE4MSxcbiAgICAgIDIxLFxuICAgICAgNjgsXG4gICAgICAxMTEsXG4gICAgICAxNTAsXG4gICAgICA1MCxcbiAgICAgIDExMSxcbiAgICAgIDEwMyxcbiAgICAgIDQyLFxuICAgICAgMjA1LFxuICAgICAgMTY5LFxuICAgICAgNzYsXG4gICAgICAxNjQsXG4gICAgICAyMzUsXG4gICAgICAxNixcbiAgICAgIDEzMCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDExNCxcbiAgICAgIDc2LFxuICAgICAgMjEwLFxuICAgICAgMjI3LFxuICAgICAgMjE0LFxuICAgICAgMTExLFxuICAgICAgMTgsXG4gICAgICAxMDQsXG4gICAgICAxODYsXG4gICAgICAxNSxcbiAgICAgIDE3OCxcbiAgICAgIDE5MyxcbiAgICAgIDQ4LFxuICAgICAgMjM5LFxuICAgICAgMTA2LFxuICAgICAgMjMxLFxuICAgICAgMjU1LFxuICAgICAgMTI2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNCN1dGNVNDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0NDM2MzM2MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlM0bVwiLFxuICAgIFwibGlkXCI6IFwiMjUwMTk0OTY0ODAzNjYxOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIL3N0VUNFTHV5MkxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWt0UnFaRXlIRW5HajBPUEhqc1RGSUIwTVE0N1JnamtpV3hVSEZDbWloND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUUFlKU2hiNDNmNjNOV3RMOUFBc0d3OU4wN21FbjdTSzBwQWVPWnFFa2ZGOER0TUtiWEx2RUprYUVhbkg5MXkrc0swWW5jVGYxSnUzcTh1MnFEeHhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5eGU0cTQxaE10eHpZS3hJNHh5QkFGamxNUzVzbU9zV2Q5T1ZuUVZhLzkxcDNzS01HMzVBc2NFZVQxejZmSmdJT0F3ekp1Z1FEOVhQa05MelV1S0Jodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0NDM2MzM2MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2OTU4MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKRXVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpFdS5qc29uIjogIntcImtleURhdGFcIjpcIm0wcGR1c1ZVZEJvM2xtYThLMWZlQXd3eXF5ZTVNK3lKU21waXBIbkRsRHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE1OTY0MzA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2OTU4MDk1MDRcIn0iCn0=  // PUT your SESSION_ID 


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
