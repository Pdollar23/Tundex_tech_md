//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "malvink003@gmail.com";
global.location = "Kwekwe, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/tundex234/Tundex_tech_md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajRmmoKwqSSnMXxt115";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajRmmoKwqSSnMXxt115";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b1ccca316c27bffae7f5f.jpg";
global.devs = "2348081170565";
global.sudo = process.env.SUDO || "263780166288";
global.owner = process.env.OWNER_NUMBER || "2348081170565";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b1ccca316c27bffae7f5f.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "am tundex tech md";

global.SESSION_ID =
  process.env.SESSION_ID ||"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0liNHl0dTFWSGx3ODB4WXRETVBrV1RIcis1WUhRcjZKQXRuMXphSmwzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHhZWnQwZklQQ0pHVUEwNWV2ejlUMHdjNEwvYnB5OWVQbmxEVXlYTU14az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT1N4Nkc2ai9VNi94WE5oS2hTd3pTNngvUHhvZkRrS1dyV243SGhZMTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTWRZTVYzMzlpWkFZSzRYWTI0MXlMTjY2b0hvZnhXeWlTREsvdGFGUGxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNISDhaemtJZDBOc1NuSHUwbVRxRk1sbWV6RU1JMkppR3ZjU3M2S1JWSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53bDE5bkdqQnpHUDJMRnZ5NkcwMWtqWXQ2WHc4YmtTTGt3VGc3Z0JKSE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBycFgrMGhHZStJWEcvbEtCeVlRUHRZakJLUldxcmgzU2xhYVRxZ24ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjNaMVNEc3NuZlRFdmRjQU8wQ2FuQ0NEbDdPcUZPcTE4cFZ5dTl6NGFoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlzSGwwRHRxTlRkMFhGQklxRVoyQUNiM1NmY1oyRjBRSmRXM3p3OTFxUXZWd2kvcFZ5OXpnZzJBQ0N6U25lM2M1K3NJdHBjRmNVOE1uNzA4MThpTWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJVVzhVSkFUWnZ2eExMcE1kNm9oK1c3QUZXblgybStCMHJ3eHc2b3pxNzg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpT0ZvLU1jcVMzaU94MnNyd3FlaXB3IiwicGhvbmVJZCI6IjJiOGZmMGY1LTJiOTctNDU5Yy04MmJiLTQ0Mjk5OWM0MzliNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsekhOc2MyMEY3VzB3NFVZcmJoaDdIbTVOTXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dwZ1IraHpTUkZRdXdvcVM3YnJLRkNFTFFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhYNkI1TkFCIiwibWUiOnsiaWQiOiIyMzQ5MTM0MzI0MDQ0OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InBkb2xsYXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HOTJiWUdFTDJlZzcwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlptTWNIQmJCK0RtREFEMm1Bb2RVQ2RvNitBL2JIaGMxOVpqSmdRVDA2akk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNrNk01NThlTmNuZFVPekpxNXdWVkYyN1lvWGhuMHAyRkFKU2pDWHZyRnAyNVV6QnRFYkNwbUZBRDRYRWh5UVVHbWJEOUdUWWFEWkYyS1d6bHBkRkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJib3VlUU1NSVVRNTJXS3ZUSTVmZ2s3NHg1Y3dLaGRXU09raDd3TG00eVYvbk1iOE5CbHFyZHFxazJYekRQNEo0UlkrdUhQelFVaHd1cXpYSjZuSzBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzQzMjQwNDQ6OTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1pqSEJ3V3dmZzVnd0E5cGdLSFZBbmFPdmdQMng0WE5mV1l5WUVFOU9veSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODU5MjA3NX0="
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TUNDEX TECH MD ™`",
  author: process.env.PACK_AUTHER || "TUNDEX MD",
  packname: process.env.PACK_NAME || "M A L V I N",
  botname: process.env.BOT_NAME || "TUNDEX TECH MD",
  ownername: process.env.OWNER_NAME || "TUNDEX",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "T U N D E X").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
