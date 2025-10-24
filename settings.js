// LEXZY MARKET //
// DILARANG HAPUS WM INI //
// SC INI FREE DI LARANG ADA YG JUAL //
// JUAL?? HUBB WA LEXZY 085930467004 //

require("./system/module.js")
const { version } = require("./package.json")

// Settings Bot & Owner
global.owner = '628567858991'
global.versi = "7.0"
global.storename = "YAMZZOFFC"
global.namaOwner = "Yamzz Official"
global.packname = '⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜'
global.botname = '𝐘𝐚𝐦𝐳𝐳͢͠7'
global.botname2 = '𝐘𝐚𝐦𝐳𝐳͢͠7'

// Settings Channel / Saluran
global.linkgc = "https://chat.whatsapp.com/Gke0dSKAyxUCfQAUILwX1J?mode=ems_copy_t"
global.linkSaluran = "https://whatsapp.com/channel/0029Vb6VnWYFsn0l3Ou7yk2W"
global.idSaluran = "120363416262862080@newsletter"
global.namaSaluran = "𝐘𝐀𝐌𝐙𝐙 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 || 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍"
global.website = ""

// Settings Payment
global.dana = "08567858991"
global.gopay = "08567858991"
global.seabank = "901059022874"
global.qris = "./media/image/qris.jpg"

// Settings Image Url
global.image = {
menu: "./media/image/menu.jpg", 
mp4: "https://files.catbox.moe/1032ud.mp4", 
reply: "./media/image/reply.jpg", 
logo: "./media/image/logo.jpg",
yamzz: "./media/image/yamzz.jpg",
}

// Settings Delay Push Menu
global.delaypush = "5000" // 1000 = 1 detik
global.delayjpm = "5000" // 1000 = 1 detik

// Settings Api Cpanel
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://-.web.id"
global.apikey = "ptla_" // Isi api ptla
global.capikey = "ptlc_" // Isi api ptlc

// Settings Api Cpanel V2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://.web.id"
global.apikeyV2 = "ptla_" //ptla
global.capikeyV2 = "ptlc_" //ptlc


// Settings Message
global.msg = {
wait: `┏ ➫ _*📢 PROSES...*_ 
┃     *ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ ʏᴀ...*
┗━━━━━━━━⪩ *ʏᴀᴍᴢᴢᴏғғᴄ*`,
owner: `┏ ➫ _*📢 KHUSUS OWNER*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ*
┗━━━━━━━━⪩ *ʏᴀᴍᴢᴢᴏғғᴄ*`, 
group: `┏ ➫ _*📢 KHUSUS GROUP*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢʀᴏᴜᴘ*
┗━━━━━━━━⪩ *ʏᴀᴍᴢᴢᴏғғᴄ*`, 
admin: `┏ ➫ _*📢 KHUSUS ADMIN*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*
┗━━━━━━━━⪩ *ʏᴀᴍᴢᴢᴏғғᴄ*`, 
botadmin: `┏ ➫ _*📢 BOT HARUS ADMIN*_ 
┃     *ʜᴀɴʏᴀ ʙɪsᴀ ᴊɪᴋᴀ ʙᴏᴛ ᴀᴅᴍɪɴ*
┗━━━━━━━━⪩ *ʏᴀᴍᴢᴢᴏғғᴄ*`, 
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})