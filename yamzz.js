const crypto = require("crypto");
const {
  fromBuffer
} = require("file-type");
module.exports = async (_0x10b5e5, _0x5ed4e1, _0x57df1b) => {
  try {
    const _0x1e0f3d = _0x5ed4e1.mtype === "conversation" && _0x5ed4e1.message.conversation ? _0x5ed4e1.message.conversation : _0x5ed4e1.mtype == "imageMessage" && _0x5ed4e1.message.imageMessage.caption ? _0x5ed4e1.message.imageMessage.caption : _0x5ed4e1.mtype == "documentMessage" && _0x5ed4e1.message.documentMessage.caption ? _0x5ed4e1.message.documentMessage.caption : _0x5ed4e1.mtype == "videoMessage" && _0x5ed4e1.message.videoMessage.caption ? _0x5ed4e1.message.videoMessage.caption : _0x5ed4e1.mtype == "extendedTextMessage" && _0x5ed4e1.message.extendedTextMessage.text ? _0x5ed4e1.message.extendedTextMessage.text : _0x5ed4e1.mtype == "buttonsResponseMessage" && _0x5ed4e1.message.buttonsResponseMessage.selectedButtonId ? _0x5ed4e1.message.buttonsResponseMessage.selectedButtonId : _0x5ed4e1.mtype == "interactiveResponseMessage" ? JSON.parse(_0x5ed4e1.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x5ed4e1.mtype == "templateButtonReplyMessage" && _0x5ed4e1.message.templateButtonReplyMessage.selectedId ? _0x5ed4e1.message.templateButtonReplyMessage.selectedId : "";
    const _0x456d2e = typeof _0x5ed4e1.text == "string" ? _0x5ed4e1.text : "";
    const _0x340274 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x1e0f3d) ? _0x1e0f3d.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
    const _0xcbc4e7 = _0x1e0f3d.startsWith(_0x340274);
    const _0x56e505 = _0xcbc4e7 ? _0x1e0f3d.slice(_0x340274.length).trim().split(" ").shift().toLowerCase() : "";
    const _0x3c9cb8 = _0x340274 + _0x56e505;
    const _0x16f85c = _0x1e0f3d.trim().split(/ +/).slice(1);
    const _0x1d36b1 = crypto.randomBytes(3).toString("hex");
    const _0xf4e9d2 = _0x5ed4e1.quoted ? _0x5ed4e1.quoted : _0x5ed4e1;
    const _0x33222f = (_0xf4e9d2.msg || _0xf4e9d2).mimetype || "";
    const _0x3ff73a = _0xf4e9d2.msg || _0xf4e9d2;
    const _0x5ef4a1 = q = _0x16f85c.join(" ");
    const _0x41d58d = await _0x10b5e5.decodeJid(_0x10b5e5.user.id);
    const _0x503b7c = _0x5ed4e1.sender.split("@")[0] == global.owner ? true : _0x5ed4e1.fromMe ? true : false;
    const _0x6c3ed0 = JSON.parse(fs.readFileSync("./data/premium.json"));
    const _0x84d48 = _0x5ed4e1.pushName || "" + _0x5ed4e1.sender.split("@")[0];
    const _0x293116 = _0x41d58d.includes(_0x5ed4e1.sender);
    const _0x27e96e = _0x6c3ed0.includes(_0x5ed4e1.sender);
    const {
      runtime: _0x10a8ce,
      isUrl: _0x2f33e4,
      getRandom: _0x563eac,
      getTime: _0x39b0e0,
      tanggal: _0x549401,
      toRupiah: _0x4600e1,
      telegraPh: _0x461847,
      pinterest: _0x47e03f,
      toHD: _0x480d14,
      ucapan: _0x39fc5a,
      generateProfilePicture: _0x5823d9,
      formatp: _0xc1e28a,
      getBuffer: _0x36a6ab,
      fetchJson: _0x2548f6,
      resize: _0x18ae29,
      sleep: _0x35e501
    } = require("./system/function.js");
    _0x5ed4e1.isGroup = _0x5ed4e1.chat.endsWith("g.us");
    _0x5ed4e1.metadata = _0x5ed4e1.isGroup ? (await _0x10b5e5.groupMetadata(_0x5ed4e1.chat).catch(_0x541f5a => {})) || {} : {};
    _0x5ed4e1.isAdmin = _0x5ed4e1.metadata && _0x5ed4e1.metadata.participants ? _0x5ed4e1.metadata.participants.find(_0x4dda76 => _0x4dda76.admin !== null && _0x4dda76.id == _0x5ed4e1.sender) || false : false;
    _0x5ed4e1.isBotAdmin = _0x5ed4e1.metadata && _0x5ed4e1.metadata.participants ? _0x5ed4e1.metadata.participants.find(_0x2567c9 => _0x2567c9.admin !== null && _0x2567c9.id == _0x41d58d) || false : false;
    const _0x37643e = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: "@newsletter",
          newsletterName: "Hore",
          jpegThumbnail: "",
          caption: "Powered By " + namaOwner,
          inviteExpiration: 0
        }
      }
    };
    const _0x12614c = {
      key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net"
      },
      message: {
        extendedTextMessage: {
          text: namaOwner + " - Marketplace"
        }
      }
    };
    const _0x4bbd0c = {
      key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net"
      },
      message: {
        extendedTextMessage: {
          text: "" + namaOwner
        }
      }
    };
    const _0x39b03f = async _0x145535 => {
      const _0x182eba = " *Contoh Command :*\n*" + _0x3c9cb8 + "* " + _0x145535;
      return _0x5ed4e1.reply(_0x182eba);
    };
    const _0x514f36 = _0x1100ce => {
      return _0x1100ce.charAt(0).toUpperCase() + _0x1100ce.slice(1);
    };
    if (_0xcbc4e7) {
      console.log(chalk.yellow.bgCyan.bold(botname), chalk.blue.bold("[ PESAN ]"), chalk.blue.bold("FROM"), chalk.blue.bold("" + _0x5ed4e1.sender.split("@")[0]), chalk.blue.bold("Text :"), chalk.blue.bold("" + _0x3c9cb8));
    }
    switch (_0x56e505) {
      case "menu":
        {
          const _0x591510 = "\n给 `INFORMATION BOT`\n给 *𝚄𝚂𝙴𝚁 : " + _0x5ed4e1.sender.split("@")[0] + "*\n给 *𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : ©⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜*\n给 *𝚂𝚃𝙾𝚁𝙴 𝙽𝙰𝙼𝙴 : " + storename + "*\n给 *𝙽𝙰𝙼𝙴 𝙱𝙾𝚃 : " + botname + "*\n给 *𝚅𝙴𝚁𝚂𝙸 : " + versi + "*\n给 *𝚃𝚈𝙿𝙴 : Multi Device*\n\n*𝐏𝐄𝐒𝐀𝐍 𝐌𝐎𝐑𝐀𝐋*\n*人間は、何気ないものですが、この世界に生まれ、生きるものです。*\n\n*Untuk melihat semua menu silahkan klik* `button dibawah`\n";
          _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            footer: "" + global.botname,
            buttons: [{
              buttonId: ".dev",
              buttonText: {
                displayText: "Developer Script📞"
              },
              type: 1
            }, {
              buttonId: "action",
              buttonText: {
                displayText: "ini pesan interactiveMeta"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Silahkan Pilih Opsi Menu",
                  sections: [{
                    title: "Untuk Melihat Semua Menu",
                    highlight_label: "yamzzmenu",
                    rows: [{
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀʟʟ ᴍᴇɴᴜ📍",
                      id: ".yamzzmenu"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴡɴᴇʀ☎",
                      id: ".owner"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴡɴᴍᴇɴᴜ📝",
                      id: ".ownmenu"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢʀᴏᴜᴘ ᴍᴇɴᴜ 📌",
                      id: ".groupmenu"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛᴏʀᴇ ᴍᴇɴᴜ💳",
                      id: ".storemenu"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴄᴘᴀɴᴇʟᴠ𝟷📡",
                      id: ".cpanelv1"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴄᴘᴀɴᴇʟᴠ𝟸 📡",
                      id: ".cpanelv2"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴘᴜsʜᴋᴏɴᴛᴀᴋ📲",
                      id: ".pushmenu"
                    }, {
                      title: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴛᴏᴏʟs📌",
                      id: ".toolsmenu"
                    }]
                  }]
                })
              }
            }],
            headerType: 1,
            viewOnce: true,
            document: fs.readFileSync("./package.json"),
            fileName: "" + namaOwner,
            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            fileLength: 99999999,
            caption: _0x591510,
            contextInfo: {
              isForwarded: true,
              mentionedJid: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
              },
              externalAdReply: {
                title: botname + " - " + versi,
                thumbnailUrl: global.image.logo,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
        break;
      case "yamzzmenu":
        {
          let _0xbca4e6 = "\n给 `INFORMATION BOT`\n给 *𝚄𝚂𝙴𝚁 : " + _0x5ed4e1.sender.split("@")[0] + "*\n给 *𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : ©⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜*\n给 *𝚂𝚃𝙾𝚁𝙴 𝙽𝙰𝙼𝙴 : " + storename + "*\n给 *𝙽𝙰𝙼𝙴 𝙱𝙾𝚃 : " + botname + "*\n给 *𝚅𝙴𝚁𝚂𝙸 : " + versi + "*\n给 *𝚃𝚈𝙿𝙴 : Multi Device*\n\n*𝐏𝐄𝐒𝐀𝐍 𝐌𝐎𝐑𝐀𝐋*\n*JANGAN LUPA JOIN SALURAN AGAR TIDAK KETINGGALAN NEW FITUR🥶🔥*\n‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n\n┌─❐ *乂ＯＷＮＥＲ ＭＥＮＵ* ❐ \n┃ ➢ .ɪᴘ\n┃ ➢ .ᴀᴅᴅᴄᴀsᴇ\n┃ ➢ .ᴅᴇʟᴄᴀsᴇ\n┃ ➢ .ɢᴇᴛᴄᴀsᴇ\n┃ ➢ .ᴀᴅᴅsᴇʟʟᴇʀ\n┃ ➢ .ʟɪsᴛsᴇʟʟᴇʀ\n┃ ➢ .ᴅᴇʟsᴇʟʟᴇʀ\n┃ ➢ .ᴜᴘᴄʜ\n┃ ➢ .ᴜᴘsᴡᴛᴀɢ\n┃ ➢ .ʀᴇᴀᴄᴛᴄʜ\n┃ ➢ .ʟɪsᴛɢʀᴏᴜᴘ\n┃ ➢ .ʙᴄɢᴄ\n┃ ➢ .sᴇʟғ\n┃ ➢ .ᴘᴜʙʟɪᴄ\n┃ ➢ .ᴘᴜʙʟɪᴄᴛɪᴍᴇ\n┃ ➢ .ᴋᴜᴅᴇᴛᴀ\n┃ ➢ .ᴅᴇᴍᴏᴛᴇ\n┃ ➢ .ᴅᴇʟᴘᴀɴᴇʟ\n┃ ➢ .ᴅᴇʟᴘᴀɴᴇʟ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ\n┃ ➢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ-ᴠ2\n┃ ➢ .ᴄᴀᴅᴍɪɴ\n┃ ➢ .ᴄᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴅᴇʟᴀᴅᴍɪɴ\n┃ ➢ .ᴅᴇʟᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ\n┃ ➢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀᴜsᴇʀ\n┃ ➢ .ᴄʟᴇᴀʀᴜsᴇʀ-ᴠ2\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＳＴＯＲＥ ＭＥＮＵ* ❐ \n┃ ➢ .ᴘᴀʏᴍᴇɴᴛ\n┃ ➢ .ᴘʀᴏsᴇs\n┃ ➢ .ᴛᴜɴᴅᴀ\n┃ ➢ .ʙᴀᴛᴀʟ\n┃ ➢ .ᴅᴏɴᴇ\n┃ ➢ .sᴄʀɪᴘᴛ\n┃ ➢ .ᴛᴀᴍʙᴀʜ\n┃ ➢ .ᴋᴜʀᴀɴɢ\n┃ ➢ .ᴋᴀʟɪ\n┃ ➢ .ʙᴀɢɪ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＳＥＬＬＥＲ ＳＥＲＶＥＲ* ❐ \n┃ ➢ .1ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .2ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .3ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .4ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .5ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .6ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .7ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .8ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .9ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .10ɢʙ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .ᴜɴʟɪ *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .ʟɪsᴛᴘᴀɴᴇʟ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＯＷＮＥＲ ＳＥＲＶＥＲ* ❐ \n┃ ➢ .1ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .2ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .3ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .4ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .5ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .6ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .7ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .8ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .9ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .10ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .ᴜɴʟɪ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ,628xxx*\n┃ ➢ .ʟɪsᴛᴘᴀɴᴇʟ-ᴠ2\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＧＲＯＵＰ ＭＥＮＵ* ❐ \n┃ ➢ .ᴋɪᴄᴋ\n┃ ➢ .ᴀᴅᴅ\n┃ ➢ .ʟᴇᴀᴠᴇ\n┃ ➢ .ʀᴇsᴇᴛʟɪɴᴋɢᴄ\n┃ ➢ .ᴛᴀɢ\n┃ ➢ .ʟɪɴᴋɢᴄ\n┃ ➢ .ʜɪᴅᴇᴛᴀɢ\n┃ ➢ .ᴍᴜᴛᴇ\n┃ ➢ .ʙʟɢᴄ\n┃ ➢ .ᴏᴘᴇɴ\n┃ ➢ .ᴄʟᴏsᴇ\n┃ ➢ .ᴏᴘᴇɴᴛɪᴍᴇ\n┃ ➢ .ᴄʟᴏsᴇᴛɪᴍᴇ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＰＵＳＨ ＭＥＮＵ* ❐ \n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ2\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟹 ᴠɪᴘ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟺 ᴠɪᴘ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟻 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ2\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟹 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟺 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟻 ᴠɪᴘ\n┃ ➢ .ᴊᴘᴍ\n┃ ➢ .ᴊᴘᴍʜᴛ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n┌─❐ *乂ＴＯＯＬＳ ＭＥＮＵ* ❐ \n┃ ➢ .ᴛᴏᴜʀʟ\n┃ ➢ .ʀᴠᴏ\n┃ ➢ .ᴀᴡs\n┃ ➢ .ʙᴄ ʙᴇʟᴜᴍ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            video: {
              url: "" + global.image.mp4
            },
            gifPlayback: true,
            caption: _0xbca4e6,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              mentionedJid: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"],
              forwardedNewsletterMessageInfo: {
                newsletterName: "フランキー×キネ",
                newsletterJid: global.idSaluran
              },
              externalAdReply: {
                title: "⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜",
                body: "⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜",
                thumbnailUrl: "" + global.image,
                sourceUrl: "" + global.website,
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "ownmenu":
        {
          let _0xbda97c = "\n┌─❐ *乂ＯＷＮＥＲ ＭＥＮＵ* ❐ \n┃ ➢ .ɪᴘ\n┃ ➢ .ᴀᴅᴅᴄᴀsᴇ\n┃ ➢ .ᴅᴇʟᴄᴀsᴇ\n┃ ➢ .ɢᴇᴛᴄᴀsᴇ\n┃ ➢ .ᴀᴅᴅsᴇʟʟᴇʀ\n┃ ➢ .ʟɪsᴛsᴇʟʟᴇʀ\n┃ ➢ .ᴅᴇʟsᴇʟʟᴇʀ\n┃ ➢ .ᴜᴘᴄʜ\n┃ ➢ .ᴜᴘsᴡᴛᴀɢ\n┃ ➢ .ʀᴇᴀᴄᴛᴄʜ\n┃ ➢ .ʟɪsᴛɢʀᴏᴜᴘ\n┃ ➢ .ʙᴄɢᴄ\n┃ ➢ .sᴇʟғ\n┃ ➢ .ᴘᴜʙʟɪᴄ\n┃ ➢ .ᴘᴜʙʟɪᴄᴛɪᴍᴇ\n┃ ➢ .ᴋᴜᴅᴇᴛᴀ\n┃ ➢ .ᴅᴇᴍᴏᴛᴇ\n┃ ➢ .ᴅᴇʟᴘᴀɴᴇʟ\n┃ ➢ .ᴅᴇʟᴘᴀɴᴇʟ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ\n┃ ➢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ-ᴠ2\n┃ ➢ .ᴄᴀᴅᴍɪɴ\n┃ ➢ .ᴄᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴅᴇʟᴀᴅᴍɪɴ\n┃ ➢ .ᴅᴇʟᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ\n┃ ➢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ-ᴠ2\n┃ ➢ .ᴄʟᴇᴀʀᴜsᴇʀ\n┃ ➢ .ᴄʟᴇᴀʀᴜsᴇʀ-ᴠ2\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0xbda97c,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "groupmenu":
        {
          let _0x475f62 = "\n┌─❐ *乂ＧＲＯＵＰ ＭＥＮＵ* ❐ \n┃ ➢ .ᴋɪᴄᴋ\n┃ ➢ .ᴀᴅᴅ\n┃ ➢ .ʟᴇᴀᴠᴇ\n┃ ➢ .ʀᴇsᴇᴛʟɪɴᴋɢᴄ\n┃ ➢ .ᴛᴀɢ\n┃ ➢ .ʟɪɴᴋɢᴄ\n┃ ➢ .ʜɪᴅᴇᴛᴀɢ\n┃ ➢ .ᴍᴜᴛᴇ\n┃ ➢ .ʙʟɢᴄ\n┃ ➢ .ᴏᴘᴇɴ\n┃ ➢ .ᴄʟᴏsᴇ\n┃ ➢ .ᴏᴘᴇɴᴛɪᴍᴇ\n┃ ➢ .ᴄʟᴏsᴇᴛɪᴍᴇ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x475f62,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "storemenu":
        {
          let _0x11cb2f = "\n┌─❐ *乂ＳＴＯＲＥ ＭＥＮＵ* ❐ \n┃ ➢ .ʙᴜʏsᴄ\n┃ ➢ .ᴘᴀʏᴍᴇɴᴛ\n┃ ➢ .ᴘʀᴏsᴇs\n┃ ➢ .ᴛᴜɴᴅᴀ\n┃ ➢ .ʙᴀᴛᴀʟ\n┃ ➢ .ᴅᴏɴᴇ\n┃ ➢ .sᴄʀɪᴘᴛ\n┃ ➢ .ᴛᴀᴍʙᴀʜ\n┃ ➢ .ᴋᴜʀᴀɴɢ\n┃ ➢ .ᴋᴀʟɪ\n┃ ➢ .ʙᴀɢɪ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x11cb2f,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "cpanelv1":
        {
          let _0x2ffd2a = "\n┌─❐ *乂ＳＥＬＬＥＲ ＳＥＲＶＥＲ* ❐ \n┃ ➢ .1ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .2ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .3ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .4ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .5ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .6ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .7ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .8ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .9ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .10ɢʙ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .ᴜɴʟɪ *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .ʟɪsᴛᴘᴀɴᴇʟ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x2ffd2a,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "cpanelv2":
        {
          let _0x280783 = "\n┌─❐ *乂ＯＷＮＥＲ ＳＥＲＶＥＲ* ❐ \n┃ ➢ .1ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .2ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .3ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .4ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .5ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .6ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .7ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .8ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .9ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .10ɢʙ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .ᴜɴʟɪ-ᴠ2 *ᴜsᴇʀɴᴀᴍᴇ*\n┃ ➢ .ʟɪsᴛᴘᴀɴᴇʟ-ᴠ2\n┃ ➢ .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x280783,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "pushmenu":
        {
          let _0x544041 = "\n┌─❐ *乂ＰＵＳＨ ＭＥＮＵ* ❐ \n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ2\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟹 ᴠɪᴘ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟺 ᴠɪᴘ\n┃ ➢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ𝟻 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ2\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟹 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟺 ᴠɪᴘ\n┃ ➢ .sᴀᴠᴇᴋᴏɴᴛᴀᴋ𝟻 ᴠɪᴘ\n┃ ➢ .ᴊᴘᴍ\n┃ ➢ .ᴊᴘᴍʜᴛ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x544041,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "toolsmenu":
        {
          let _0x1ced96 = "\n┌─❐ *乂ＴＯＯＬＳ ＭＥＮＵ* ❐ \n┃ ➢ .ᴛᴏᴜʀʟ\n┃ ➢ .ʀᴠᴏ\n┃ ➢ .ᴀᴡs\n┃ ➢ .ʙᴄ\n┃ ➢ .ʙʀᴀᴛ\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x1ced96,
            mentions: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "publictime":
      case "publiktime":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply("Fitur ini hanya untuk owner.");
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("Contoh: publictime 30s");
          }
          let _0x458b40 = _0x5ef4a1.match(/^(\d+)(s|m|h)$/);
          if (!_0x458b40) {
            return _0x5ed4e1.reply("Format salah. Contoh: publictime 30s / 1m / 2h");
          }
          let _0x16a936 = parseInt(_0x458b40[1]);
          let _0x4b06fd = _0x458b40[2];
          let _0x49433c = _0x4b06fd === "s" ? _0x16a936 * 1000 : _0x4b06fd === "m" ? _0x16a936 * 60 * 1000 : _0x16a936 * 60 * 60 * 1000;
          _0x10b5e5.public = true;
          _0x5ed4e1.reply("Bot sekarang *Publik* selama " + _0x16a936 + _0x4b06fd + ". Nanti akan otomatis kembali ke mode *Self*.");
          setTimeout(() => {
            _0x10b5e5.public = false;
            _0x5ed4e1.reply("Waktu publik selesai! Bot kembali ke mode *Self*.");
          }, _0x49433c);
        }
        break;
      case "payment":
      case "nope":
      case "allpay":
        {
          let _0x12b5e5 = " *[ PAYMENT " + storename + " ]*\n\n*(E-WALLET)*\n\n*DANA*\n- *" + dana + "*\n\nHarap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You\n\n© " + storename;
          _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x12b5e5,
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [_0x5ed4e1.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: "QRIS? KLIK DISINI",
                body: "PAYMENT " + global.storename,
                containsAutoReply: true,
                mediaType: 1,
                thumbnailUrl: "" + qris,
                sourceUrl: "" + qris
              }
            }
          }, {
            quoted: _0x5ed4e1
          });
          await _0x35e501(1500);
        }
        break;
      case "tunda":
        {
          const _0x33bf32 = "*TRANSAKSI MENGALAMI PENDING*\n\n\n𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚\n𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥\n\n*AKAN KAMI PROSES SEGERA*";
          _0x5ed4e1.reply(_0x33bf32);
        }
        break;
      case "batal":
        {
          const _0x2f84dc = "*TRANSAKSI DI BATALKAN*\n\n✨ *Status*: Batal\n\n*Semua Transaksi Dibatalkan*\n";
          _0x5ed4e1.reply(_0x2f84dc);
        }
        break;
      case "done":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x3fb2d5 = _0x5ef4a1.split(",");
          if (_0x3fb2d5.length < 2) {
            return _0x5ed4e1.reply("*Format salah!*\n\nPenggunaan:\n.done barang,nominal");
          }
          let _0x3b0a3f = _0x3fb2d5[0];
          let _0x472114 = _0x3fb2d5[1];
          _0x5ed4e1.reply("*━━ TRANSAKSI BERHASIL ━━*\n\n _• *Barang:* " + _0x3b0a3f + "_\n _• *Nominal:* Rp" + _0x472114 + "_\n _• *Nama Store:* " + storename + "_\n\n*TERIMA KASIH TELAH ORDER DI " + storename + "*\n*JANGAN LUPA ORDER LAGI YA*🙏");
        }
        break;
      case "proses":
        {
          _0x5ed4e1.reply("*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*");
          _0x10b5e5.sendMessage("" + owner, {
            text: "BANG " + storename + " ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK",
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true
            }
          });
        }
        break;
      case "tambah":
        {
          if (!_0x5ef4a1.includes("+")) {
            return _0x5ed4e1.reply("Gunakan dengan cara " + (_0x340274 + _0x56e505) + " *angka* + *angka*\n\n_Contoh_\n\n" + (_0x340274 + _0x56e505) + " 1+2");
          }
          arg = _0x16f85c.join(" ");
          atas = arg.split("+")[0];
          bawah = arg.split("+")[1];
          var _0x28f859 = Number(atas);
          var _0x36bd31 = Number(bawah);
          _0x5ed4e1.reply("" + (_0x28f859 + _0x36bd31));
        }
        break;
      case "kurang":
        {
          if (!_0x5ef4a1.includes("-")) {
            return _0x5ed4e1.reply("Gunakan dengan cara " + (_0x340274 + _0x56e505) + " *angka* - *angka*\n\n_Contoh_\n\n" + (_0x340274 + _0x56e505) + " 1-2");
          }
          arg = _0x16f85c.join(" ");
          atas = arg.split("-")[0];
          bawah = arg.split("-")[1];
          var _0x28f859 = Number(atas);
          var _0x36bd31 = Number(bawah);
          _0x5ed4e1.reply("" + (_0x28f859 - _0x36bd31));
        }
        break;
      case "kali":
        {
          if (!_0x5ef4a1.includes("*")) {
            return _0x5ed4e1.reply("Gunakan dengan cara " + (_0x340274 + _0x56e505) + " *angka* * *angka*\n\n_Contoh_\n\n" + (_0x340274 + _0x56e505) + " 1*2");
          }
          arg = _0x16f85c.join(" ");
          atas = arg.split("*")[0];
          bawah = arg.split("*")[1];
          var _0x28f859 = Number(atas);
          var _0x36bd31 = Number(bawah);
          _0x5ed4e1.reply("" + _0x28f859 * _0x36bd31);
        }
        break;
      case "bagi":
        {
          if (!_0x5ef4a1.includes("/")) {
            return _0x5ed4e1.reply("Gunakan dengan cara " + (_0x340274 + _0x56e505) + " *angka* / *angka*\n\n_Contoh_\n\n" + (_0x340274 + _0x56e505) + " 1/2");
          }
          arg = _0x16f85c.join(" ");
          atas = arg.split("/")[0];
          bawah = arg.split("/")[1];
          var _0x28f859 = Number(atas);
          var _0x36bd31 = Number(bawah);
          _0x5ed4e1.reply("" + _0x28f859 / _0x36bd31);
        }
        break;
      case "developerbot":
      case "owner":
        {
          await _0x10b5e5.sendContact(_0x5ed4e1.chat, [global.owner], _0x5ed4e1);
        }
        break;
      case "developer":
      case "dev":
        {
          const _0x542249 = "628567858991";
          const _0x56dae2 = "⏤͟͟͞͞𝐘𝐚𝐦𝐳𝐳𝐎͢͠𝐟𝐟𝐜";
          const _0x41cbbb = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x56dae2 + "\nTEL;waid=" + _0x542249 + ":" + _0x542249 + "\nEND:VCARD";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            contacts: {
              displayName: _0x56dae2,
              contacts: [{
                vcard: _0x41cbbb
              }]
            }
          });
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: "ʜᴇʟʟᴏ ᴋᴀᴋᴋ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴘᴇᴍʙᴜᴀᴛ sᴄʀɪᴘᴛ ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʏᴀ !"
          }, {
            quoted: _0x37643e
          });
        }
        ;
        break;
      case "sc":
      case "script":
        {
          const _0x2fb715 = "\nʜᴇʟʟᴏ ᴋᴀᴡᴀɴ @" + _0x5ed4e1.sender.split("@")[0] + ",\nᴘᴇʀᴋᴇɴᴀʟᴋᴀɴ ᴅᴇᴠ ᴋᴀᴍɪ ʏᴀɪᴛᴜ ғʀᴀɴᴋɪ\nᴋᴀʟᴏ ᴍᴀᴜ ᴀᴍʙɪʟ sᴄ ɪᴋᴜᴛɪ ᴄᴀʀᴀ ᴅɪ ʙᴀᴡᴀʜ 👇\n\n> ᴍᴀᴜ sᴄ ɴʏᴀ ? ᴍᴀsᴜᴋ ᴄʜ\n> https://whatsapp.com/channel/0029VaeRxEf0wajqtfKA1o1J\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x2fb715,
            contextInfo: {
              externalAdReply: {
                title: "𝐅𝐫𝐚𝐧𝐤𝐢 𝐇𝐨𝐬𝐭𝐢𝐧𝐠",
                body: "Runtime : " + _0x10a8ce(process.uptime()),
                thumbnailUrl: image.yamzz,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "public":
      case "publik":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          _0x10b5e5.public = true;
          _0x5ed4e1.reply("Berhasil mengganti mode bot menjadi *Public*");
        }
        break;
      case "self":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          _0x10b5e5.public = false;
          _0x5ed4e1.reply("Berhasil mengganti mode bot menjadi *Self*");
        }
        break;
      case "upswtag":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("text & bisa dengan kirim foto");
          }
          if (/image/.test(_0x33222f)) {
            global.imgsw = _0x3ff73a;
          }
          const _0x369940 = await _0x10b5e5.groupFetchAllParticipating();
          let _0x38eae8 = await Object.keys(_0x369940);
          global.textupsw = _0x5ef4a1;
          let _0x31e722 = [];
          for (let _0x5f46b6 of _0x38eae8) {
            await _0x31e722.push({
              title: _0x369940[_0x5f46b6].subject,
              id: ".create-storywa " + _0x5f46b6 + "|" + _0x369940[_0x5f46b6].subject,
              description: _0x369940[_0x5f46b6].participants.length + " Member"
            });
          }
          return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            buttons: [{
              buttonId: "action",
              buttonText: {
                displayText: "ini pesan interactiveMeta"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Pilih Grup",
                  sections: [{
                    title: "List Grup Chat",
                    rows: [..._0x31e722]
                  }]
                })
              }
            }],
            headerType: 1,
            viewOnce: true,
            text: "\nPilih Target Grup Tag\n",
            contextInfo: {
              isForwarded: true,
              mentionedJid: [_0x5ed4e1.sender, global.owner + "@s.whatsapp.net"]
            }
          }, {
            quoted: null
          });
        }
        𝐛𝐫𝐞𝐚𝐤;
      case "create-storywa":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!global.textupsw) {
            return _0x5ed4e1.reply("Tidak ada teks yang tersedia untuk status.");
          }
          async function _0x308cd3(_0x56074d, _0x581401) {
            try {
              let _0x5ca01a = ["#7ACAA7", "#6E257E", "#5796FF", "#7E90A4", "#736769", "#57C9FF", "#25C3DC", "#FF7B6C", "#55C265", "#FF898B", "#8C6991", "#C69FCC", "#B8B226", "#EFB32F", "#AD8774", "#792139", "#C1A03F", "#8FA842", "#A52C71", "#8394CA", "#243640"];
              let _0x714733 = [0];
              let _0x3fd836 = await _0x10b5e5.groupMetadata(_0x56074d);
              let _0x4a4660 = _0x3fd836.participants.map(_0x4ec9c8 => _0x4ec9c8.id);
              let _0x3a8822 = await _0x10b5e5.sendMessage("status@broadcast", _0x581401, {
                backgroundColor: _0x5ca01a[Math.floor(Math.random() * _0x5ca01a.length)],
                font: _0x714733[Math.floor(Math.random() * _0x714733.length)],
                statusJidList: _0x4a4660,
                additionalNodes: [{
                  tag: "meta",
                  attrs: {},
                  content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: [{
                      tag: "to",
                      attrs: {
                        jid: _0x56074d
                      },
                      content: undefined
                    }]
                  }]
                }]
              });
              await _0x10b5e5.relayMessage(_0x56074d, {
                groupStatusMentionMessage: {
                  message: {
                    protocolMessage: {
                      key: _0x3a8822.key,
                      type: 25
                    }
                  }
                }
              }, {
                userJid: _0x10b5e5.user.jid,
                additionalNodes: [{
                  tag: "meta",
                  attrs: {
                    is_status_mention: "true"
                  },
                  content: undefined
                }]
              });
            } catch (_0x466d08) {
              console.error("Error creating status mention:", _0x466d08);
            }
          }
          let [_0x35af50, _0x3c2865] = _0x5ef4a1.split("|");
          const _0x14b28d = global.textupsw;
          if (global.imgsw) {
            try {
              let _0x2d800e = await _0x10b5e5.downloadAndSaveMediaMessage(global.imgsw);
              await _0x308cd3(_0x35af50, {
                image: {
                  url: _0x2d800e
                },
                caption: _0x14b28d
              });
              await fs.promises.unlink(_0x2d800e);
            } catch (_0x1d9fb3) {
              console.error("Error processing media:", _0x1d9fb3);
            }
          } else {
            await _0x308cd3(_0x35af50, {
              text: _0x14b28d
            });
          }
          return _0x5ed4e1.reply("Berhasil membuat status tag grup " + _0x3c2865);
        }
        break;
      case "upch":
      case "upsaluran":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("reply audio\ncontoh: .upch (wm nya)");
          }
          _0x10b5e5.sendMessage("" + global.idSaluran, {
            audio: await _0xf4e9d2.download(),
            mimetype: "audio/mpeg",
            ptt: true,
            contextInfo: {
              isForwarded: true,
              mentionedJid: [_0x5ed4e1.sender],
              businessMessageForwardInfo: {
                businessOwnerJid: "\n120363416262862080@newsletter\n        "
              },
              forwardedNewsletterMessageInfo: {
                newsletterName: "" + _0x5ef4a1,
                newsletterJid: "\n120363416262862080@newsletter\n        "
              }
            }
          }, {
            quoted: _0x5ed4e1
          });
          _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            react: {
              text: "✅",
              key: _0x5ed4e1.key
            }
          });
          _0x5ed4e1.reply("mengirim audio ke channel berhasil");
        }
        break;
      case "reactch":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(".reactch linkpesan 😂");
          }
          if (!_0x16f85c[0] || !_0x16f85c[1]) {
            return _0x5ed4e1.reply("Wrong Format");
          }
          if (!_0x16f85c[0].includes("https://whatsapp.com/channel/")) {
            return _0x5ed4e1.reply("Link tautan tidak valid");
          }
          let _0x13be85 = _0x16f85c[0].split("/")[4];
          let _0x150fe7 = _0x16f85c[0].split("/")[5];
          let _0x180ee9 = await _0x10b5e5.newsletterMetadata("invite", _0x13be85);
          await _0x10b5e5.newsletterReactMessage(_0x180ee9.id, _0x150fe7, _0x16f85c[1]);
          _0x5ed4e1.reply("Berhasil mengirim reaction " + _0x16f85c[1] + " ke dalam channel " + _0x180ee9.name);
        }
        break;
      case "listgroup":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x24a1ba = "*List Semua Grup Yang Bot Masuk:*\n\n";
          let _0x2a708a = Object.entries(_0x10b5e5.groupMetadata);
          for (let [_0x453095, _0x34751f] of _0x2a708a) {
            _0x24a1ba += "*• Nama:* " + _0x34751f.subject + "\n*• ID:* " + _0x453095 + "\n\n";
          }
          let _0x7bcbdd = await _0x10b5e5.groupFetchAllParticipating();
          for (let _0x592c7c in _0x7bcbdd) {
            let _0x5c7059 = _0x7bcbdd[_0x592c7c];
            _0x24a1ba += "*• Nama:* " + _0x5c7059.subject + "\n*• ID:* " + _0x592c7c + "\n\n";
          }
          _0x5ed4e1.reply(_0x24a1ba.trim());
        }
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            throw "Text mana?\n\nExample : " + (_0x340274 + _0x56e505) + " ara ara";
          }
          let _0x46cfd8 = await _0x10b5e5.groupFetchAllParticipating();
          let _0x496cf8 = Object.entries(_0x46cfd8).slice(0).map(_0x2b3c9d => _0x2b3c9d[1]);
          let _0x25a3d5 = _0x496cf8.map(_0x5bd7a7 => _0x5bd7a7.id);
          _0x5ed4e1.reply("Mengirim Broadcast Ke " + _0x25a3d5.length + " Group Chat, Waktu Selesai " + _0x25a3d5.length * 1.5 + " detik");
          for (let _0x32a278 of _0x25a3d5) {
            await _0x35e501(1500);
            _0x10b5e5.sendMessage(_0x32a278, {
              text: "Broadcast\n\nText: " + _0x5ef4a1 + "\n"
            }, {
              quoted: _0x5ed4e1
            });
          }
          _0x5ed4e1.reply("Sukses Mengirim Broadcast Ke " + _0x25a3d5.length + " Group");
        }
        break;
      case "addseller":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("6285###"));
          }
          let _0x54204e = _0x5ed4e1.quoted ? _0x5ed4e1.quoted.sender : _0x5ef4a1.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x262ba0 = _0x54204e.split("@")[0];
          if (_0x262ba0 === global.owner || _0x6c3ed0.includes(_0x54204e) || _0x54204e === _0x41d58d) {
            return _0x5ed4e1.reply("Nomor " + _0x262ba0 + " sudah menjadi reseller!");
          }
          _0x6c3ed0.push(_0x54204e);
          await fs.writeFileSync("./data/premium.json", JSON.stringify(_0x6c3ed0, null, 2));
          await _0x5ed4e1.reply("Berhasil menambahkan *" + _0x262ba0 + "* sebagai reseller ✅");
        }
        break;
      case "listseller":
        {
          if (_0x6c3ed0.length < 1) {
            return _0x5ed4e1.reply("Tidak ada user reseller");
          }
          let _0x12b05d = "\n *乂 List all reseller panel*\n";
          for (let _0x2ffe0a of _0x6c3ed0) {
            _0x12b05d += "\n* " + _0x2ffe0a.split("@")[0] + "\n* *Tag :* @" + _0x2ffe0a.split("@")[0] + "\n";
          }
          _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x12b05d,
            mentions: _0x6c3ed0
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "delseller":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("6285###"));
          }
          let _0x22773f = _0x5ed4e1.quoted ? _0x5ed4e1.quoted.sender : _0x5ef4a1.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x2aeebc = _0x22773f.split("@")[0];
          if (_0x2aeebc === global.owner || _0x22773f === _0x41d58d) {
            return _0x5ed4e1.reply("Tidak bisa menghapus owner atau bot!");
          }
          if (!_0x6c3ed0.includes(_0x22773f)) {
            return _0x5ed4e1.reply("Nomor " + _0x2aeebc + " bukan reseller!");
          }
          let _0x50f7a9 = _0x6c3ed0.indexOf(_0x22773f);
          _0x6c3ed0.splice(_0x50f7a9, 1);
          await fs.writeFileSync("./library/database/premium.json", JSON.stringify(_0x6c3ed0, null, 2));
          await _0x5ed4e1.reply("Berhasil menghapus *" + _0x2aeebc + "* dari reseller ✅");
        }
        break;
      case "1gb":
      case "2gb":
      case "3gb":
      case "4gb":
      case "5gb":
      case "6gb":
      case "7gb":
      case "8gb":
      case "9gb":
      case "10gb":
      case "unlimited":
      case "unli":
        {
          if (!_0x503b7c && !_0x27e96e) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("*Contoh Command :*\n\n*" + _0x56e505 + "* username,6283XX");
          }
          let _0x709949;
          let _0x532647;
          let _0x2d50f5 = _0x5ef4a1.split(",");
          if (_0x2d50f5.length > 1) {
            let [_0x384683, _0x1b3ea3] = _0x5ef4a1.split(",");
            if (!_0x384683 || !_0x1b3ea3) {
              return _0x5ed4e1.reply("*Contoh Command :*\n\n*" + _0x56e505 + "* username,6283XX");
            }
            _0x709949 = _0x1b3ea3.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            _0x532647 = _0x384683.toLowerCase();
          } else {
            _0x532647 = _0x5ef4a1.toLowerCase();
            _0x709949 = _0x5ed4e1.chat;
          }
          var _0x231eb0 = await _0x10b5e5.onWhatsApp(_0x709949.split("@")[0]);
          if (_0x231eb0.length < 1) {
            return _0x5ed4e1.reply("Nomor target tidak terdaftar di whatsapp!");
          }
          var _0x50de4b;
          var _0x2a8466;
          var _0x315ee1;
          if (_0x56e505 == "1gb") {
            _0x50de4b = "1000";
            _0x2a8466 = "1000";
            _0x315ee1 = "40";
          } else if (_0x56e505 == "2gb") {
            _0x50de4b = "2000";
            _0x2a8466 = "1000";
            _0x315ee1 = "60";
          } else if (_0x56e505 == "3gb") {
            _0x50de4b = "3000";
            _0x2a8466 = "2000";
            _0x315ee1 = "80";
          } else if (_0x56e505 == "4gb") {
            _0x50de4b = "4000";
            _0x2a8466 = "2000";
            _0x315ee1 = "100";
          } else if (_0x56e505 == "5gb") {
            _0x50de4b = "5000";
            _0x2a8466 = "3000";
            _0x315ee1 = "120";
          } else if (_0x56e505 == "6gb") {
            _0x50de4b = "6000";
            _0x2a8466 = "3000";
            _0x315ee1 = "140";
          } else if (_0x56e505 == "7gb") {
            _0x50de4b = "7000";
            _0x2a8466 = "4000";
            _0x315ee1 = "160";
          } else if (_0x56e505 == "8gb") {
            _0x50de4b = "8000";
            _0x2a8466 = "4000";
            _0x315ee1 = "180";
          } else if (_0x56e505 == "9gb") {
            _0x50de4b = "9000";
            _0x2a8466 = "5000";
            _0x315ee1 = "200";
          } else if (_0x56e505 == "10gb") {
            _0x50de4b = "10000";
            _0x2a8466 = "5000";
            _0x315ee1 = "220";
          } else {
            _0x50de4b = "0";
            _0x2a8466 = "0";
            _0x315ee1 = "0";
          }
          let _0x2ee678 = _0x532647.toLowerCase();
          let _0x1e440b = _0x2ee678 + "@yamzz.com";
          let _0x590969 = _0x514f36(_0x2ee678) + " Server";
          let _0x23ae04 = _0x2ee678 + crypto.randomBytes(3).toString("hex");
          let _0x4fdbbc = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x1e440b,
              username: _0x2ee678.toLowerCase(),
              first_name: _0x590969,
              last_name: "Server",
              language: "en",
              password: _0x23ae04.toString()
            })
          });
          let _0x4971ef = await _0x4fdbbc.json();
          if (_0x4971ef.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x4971ef.errors[0], null, 2));
          }
          let _0x46efbd = _0x4971ef.attributes;
          let _0x37acaf = _0x549401(Date.now());
          let _0x58b5aa = _0x46efbd.id;
          let _0x517e53 = await fetch(domain + ("/api/application/nests/" + nestid + "/eggs/") + egg, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x5d3a18 = await _0x517e53.json();
          let _0x457a03 = _0x5d3a18.attributes.startup;
          let _0x275d47 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x590969,
              description: _0x37acaf,
              user: _0x58b5aa,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x457a03,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x50de4b,
                swap: 0,
                disk: _0x2a8466,
                io: 500,
                cpu: _0x315ee1
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x1d14ec = await _0x275d47.json();
          if (_0x1d14ec.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x1d14ec.errors[0], null, 2));
          }
          let _0x1991a7 = _0x1d14ec.attributes;
          var _0xaeb363;
          if (_0x5ed4e1.chat !== _0x709949) {
            _0xaeb363 = _0x709949;
            await _0x5ed4e1.reply("Akun panel *" + _0x514f36(_0x2ee678) + "* berhasil dibuat! data username dan password sudah dikirim ke nomor " + _0x709949.split("@")[0]);
          } else {
            _0xaeb363 = _0x5ed4e1.chat;
          }
          var _0x49752f = "\n*Berikut Detail Akun Panel Kamu 📦*\n‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n> *📡 ID SERVER (" + _0x1991a7.id + ")* \n*👤 USERNAME :* " + _0x46efbd.username + "\n*🔐 PASSWORD :* " + _0x23ae04 + "\n*🗓️ " + _0x549401(Date.now()) + "*\n\n- 🌐 SPEKSIFIKASI SERVER\n> * RAM : " + (_0x50de4b == "0" ? "Unlimited" : _0x50de4b.split("").length > 4 ? _0x50de4b.split("").slice(0, 2).join("") + "GB" : _0x50de4b.charAt(0) + "GB") + "*\n> *DISK : " + (_0x2a8466 == "0" ? "Unlimited" : _0x2a8466.split("").length > 4 ? _0x2a8466.split("").slice(0, 2).join("") + "GB" : _0x2a8466.charAt(0) + "GB") + "*\n> *CPU : " + (_0x315ee1 == "0" ? "Unlimited" : _0x315ee1 + "%") + "*\n\n*🔗 DOMAIN ⬇️*\n> " + global.domain + "\n\n> *NOTE*\n* JANGAN SEBAR LINK\n* JANGAN PASANG SC DDOS\n* SIMPAN DATA PANEL DENGAN BAIK\n* INGIN CLAIM GARANSI WAJIB BAWA BUKTI TRANSAKSI\n* GARANSI 15 HARI\n\n> *TUTORIAL RUN BOT VIA PANEL : https://youtu.be/7p7CgbfLmsQ?si=foa1EGsBxFymf6Ln*\n";
          await _0x10b5e5.sendMessage(_0xaeb363, {
            text: _0x49752f
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "listpanel":
      case "listp":
      case "listserver":
        {
          if (!_0x503b7c && !_0x27e96e) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x2d84e1 = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x4fc788 = await _0x2d84e1.json();
          let _0x2831a3 = _0x4fc788.data;
          if (_0x2831a3.length < 1) {
            return _0x5ed4e1.reply("Tidak ada server panel!");
          }
          let _0x3f46e7 = "\n *乂 List Server Panel Pterodactyl*\n";
          for (let _0x547112 of _0x2831a3) {
            let _0x4434c7 = _0x547112.attributes;
            let _0x4b61ff = await fetch(domain + "/api/client/servers/" + _0x4434c7.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let _0x1c1b97 = await _0x4b61ff.json();
            let _0x4bde10 = _0x1c1b97.attributes ? _0x1c1b97.attributes.current_state : _0x4434c7.status;
            _0x3f46e7 += "\n 📡 *" + _0x4434c7.id + " >> [ " + _0x4434c7.name + " ]*\n *• Ram :* " + (_0x4434c7.limits.memory == 0 ? "Unlimited" : _0x4434c7.limits.memory.toString().length > 4 ? _0x4434c7.limits.memory.toString().split("").slice(0, 2).join("") + "GB" : _0x4434c7.limits.memory.toString().length < 4 ? _0x4434c7.limits.memory.toString().charAt(1) + "GB" : _0x4434c7.limits.memory.toString().charAt(0) + "GB") + "\n *• CPU :* " + (_0x4434c7.limits.cpu == 0 ? "Unlimited" : _0x4434c7.limits.cpu.toString() + "%") + "\n *• Disk :* " + (_0x4434c7.limits.disk == 0 ? "Unlimited" : _0x4434c7.limits.disk.length > 3 ? _0x4434c7.limits.disk.toString().charAt(1) + "GB" : _0x4434c7.limits.disk.toString().charAt(0) + "GB") + "\n *• Created :* " + _0x4434c7.created_at.split("T")[0] + "\n";
          }
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x3f46e7
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "delpanel":
        {
          if (!_0x503b7c && !_0x27e96e) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("idnya");
          }
          let _0x26fbfd = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0xd0b2f5 = await _0x26fbfd.json();
          let _0x4f07f5 = _0xd0b2f5.data;
          let _0x5040f0;
          let _0x513596;
          for (let _0x4beec0 of _0x4f07f5) {
            let _0x29ffe0 = _0x4beec0.attributes;
            if (Number(_0x5ef4a1) == _0x29ffe0.id) {
              _0x5040f0 = _0x29ffe0.name.toLowerCase();
              _0x513596 = _0x29ffe0.name;
              let _0x3dc26b = await fetch(domain + ("/api/application/servers/" + _0x29ffe0.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x181b64 = _0x3dc26b.ok ? {
                errors: null
              } : await _0x3dc26b.json();
            }
          }
          let _0x48ef35 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x168160 = await _0x48ef35.json();
          let _0x46f104 = _0x168160.data;
          for (let _0xf68254 of _0x46f104) {
            let _0x2c2798 = _0xf68254.attributes;
            if (_0x2c2798.first_name.toLowerCase() == _0x5040f0) {
              let _0x4f8e5f = await fetch(domain + ("/api/application/users/" + _0x2c2798.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0xc7e213 = _0x4f8e5f.ok ? {
                errors: null
              } : await _0x4f8e5f.json();
            }
          }
          if (_0x5040f0 == undefined) {
            return _0x5ed4e1.reply("Gagal menghapus server!\nID server tidak ditemukan");
          }
          await _0x5ed4e1.reply("Sukses menghapus server panel *" + _0x514f36(_0x513596) + "*");
        }
        break;
      case "cadmin":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("*Contoh Command :*\n\n*.cadmin* username,6283XX");
          }
          let _0x8fdd9b;
          let _0x5ba3d5;
          let _0x42ca32 = _0x5ef4a1.split(",");
          if (_0x42ca32.length > 1) {
            let [_0x5dbcec, _0x24b226] = _0x5ef4a1.split(",");
            if (!_0x5dbcec || !_0x24b226) {
              return _0x5ed4e1.reply("*Contoh Command :*\n\n*.cadmin* username,6283XX");
            }
            _0x8fdd9b = _0x24b226.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            _0x5ba3d5 = _0x5dbcec.toLowerCase();
          } else {
            _0x5ba3d5 = _0x5ef4a1.toLowerCase();
            _0x8fdd9b = _0x5ed4e1.chat;
          }
          var _0x231eb0 = await _0x10b5e5.onWhatsApp(_0x8fdd9b.split("@")[0]);
          if (_0x231eb0.length < 1) {
            return _0x5ed4e1.reply("Nomor target tidak terdaftar di whatsapp!");
          }
          let _0x418085 = _0x5ba3d5.toLowerCase();
          let _0x31748d = _0x418085 + "@adminl.com";
          let _0x14f066 = _0x514f36(_0x16f85c[0]);
          let _0x4917cf = _0x418085 + crypto.randomBytes(2).toString("hex");
          let _0x246d87 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x31748d,
              username: _0x418085.toLowerCase(),
              first_name: _0x14f066,
              last_name: "Admin",
              root_admin: true,
              language: "en",
              password: _0x4917cf.toString()
            })
          });
          let _0x33f014 = await _0x246d87.json();
          if (_0x33f014.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x33f014.errors[0], null, 2));
          }
          let _0x450fde = _0x33f014.attributes;
          var _0xaeb363;
          if (_0x5ed4e1.chat !== _0x8fdd9b) {
            _0xaeb363 = _0x8fdd9b;
            await _0x5ed4e1.reply("Akun admin panel *" + _0x514f36(_0x418085) + "* berhasil dibuat! data username dan password sudah dikirim ke nomor " + _0x8fdd9b.split("@")[0]);
          } else {
            _0xaeb363 = _0x5ed4e1.chat;
          }
          var _0x49752f = "\n*Berikut Detail Akun Admin Panel 📦*\n‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n*📡 ID User (" + _0x450fde.id + ")* \n*👤 Username :* " + _0x450fde.username + "\n*🔐 Password :* " + _0x4917cf.toString() + "\n*🗓️ " + _0x549401(Date.now()) + "*\n\n*🌐* " + global.domain + "\n\n*Syarat & Ketentuan :*\n* Expired akun 1 bulan\n* Simpan data ini sebaik mungkin\n* Jangan asal hapus server!\n* Ketahuan maling sc, auto delete akun no reff!\n";
          await _0x10b5e5.sendMessage(_0xaeb363, {
            text: _0x49752f
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "listadmin":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x519695 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x1b7f0f = await _0x519695.json();
          let _0x452b85 = _0x1b7f0f.data;
          if (_0x452b85.length < 1) {
            return _0x5ed4e1.reply("Tidak ada admin panel");
          }
          var _0x49752f = "\n *乂 List Admin Panel Pterodactyl*\n";
          await _0x452b85.forEach(_0xa6fbe3 => {
            if (_0xa6fbe3.attributes.root_admin !== true) {
              return;
            }
            _0x49752f += "\n 📡 *" + _0xa6fbe3.attributes.id + " >> [ " + _0xa6fbe3.attributes.first_name + " ]*\n *• Nama :* " + _0xa6fbe3.attributes.first_name + "\n *• Created :* " + _0xa6fbe3.attributes.created_at.split("T")[0] + "\n";
          });
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x49752f
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "deladmin":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("idnya");
          }
          let _0xb4ab06 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x2fa351 = await _0xb4ab06.json();
          let _0x3a42b7 = _0x2fa351.data;
          let _0x435fb9 = null;
          let _0x230eff = null;
          await _0x3a42b7.forEach(async _0x228bcb => {
            if (_0x228bcb.attributes.id == _0x16f85c[0] && _0x228bcb.attributes.root_admin == true) {
              _0x435fb9 = _0x228bcb.attributes.username;
              _0x230eff = _0x228bcb.attributes.id;
              let _0x2cf7f6 = await fetch(domain + ("/api/application/users/" + _0x230eff), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x127ca7 = _0x2cf7f6.ok ? {
                errors: null
              } : await _0x2cf7f6.json();
            }
          });
          if (_0x230eff == null) {
            return _0x5ed4e1.reply("Gagal menghapus akun!\nID user tidak ditemukan");
          }
          await _0x5ed4e1.reply("Sukses menghapus akun admin panel *" + _0x514f36(_0x435fb9) + "*");
        }
        break;
      case "1gb-v2":
      case "2gb-v2":
      case "3gb-v2":
      case "4gb-v2":
      case "5gb-v2":
      case "6gb-v2":
      case "7gb-v2":
      case "8gb-v2":
      case "9gb-v2":
      case "10gb-v2":
      case "unlimited-v2":
      case "unli-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("*Contoh Command :*\n\n*." + _0x56e505 + "* username,628xxx");
          }
          let _0x33e047;
          let _0xe61dfa;
          let _0x3dcafe = _0x5ef4a1.split(",");
          if (_0x3dcafe.length > 1) {
            let [_0x1a3c03, _0x408f36] = _0x3dcafe;
            if (!_0x1a3c03 || !_0x408f36) {
              return _0x5ed4e1.reply("*Contoh Command :*\n\n*." + _0x56e505 + "* username,628xxx");
            }
            _0x33e047 = _0x408f36.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            _0xe61dfa = _0x1a3c03.toLowerCase();
          } else {
            _0xe61dfa = _0x5ef4a1.toLowerCase();
            _0x33e047 = _0x5ed4e1.chat;
          }
          var _0x231eb0 = await _0x10b5e5.onWhatsApp(_0x33e047.split("@")[0]);
          if (_0x231eb0.length < 1) {
            return _0x5ed4e1.reply("Nomor target tidak terdaftar di WhatsApp!");
          }
          let _0x5b6f37;
          let _0x224b39;
          let _0x20e755;
          let _0x5e8fb2 = _0x56e505.split("gb")[0];
          if (_0x56e505.includes("unli")) {
            _0x5b6f37 = "0";
            _0x224b39 = "0";
            _0x20e755 = "0";
          } else {
            let _0x254296 = parseInt(_0x5e8fb2);
            _0x5b6f37 = "" + _0x254296 * 1000;
            _0x224b39 = "" + (_0x254296 <= 2 ? 1000 : _0x254296 <= 5 ? 3000 : 4000);
            _0x20e755 = "" + (40 + (_0x254296 - 1) * 20);
          }
          let _0x24506e = _0xe61dfa;
          let _0x4b09e2 = _0x24506e + "@gmail.com";
          let _0x46edfa = _0x514f36(_0x24506e) + " Server";
          let _0x57b799 = _0x24506e + crypto.randomBytes(3).toString("hex");
          let _0x161aec = await fetch(domainV2 + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            },
            body: JSON.stringify({
              email: _0x4b09e2,
              username: _0x24506e,
              first_name: _0x46edfa,
              last_name: "Server",
              language: "en",
              password: _0x57b799
            })
          });
          let _0x2e2234 = await _0x161aec.json();
          if (_0x2e2234.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x2e2234.errors[0], null, 2));
          }
          let _0x156ad8 = _0x2e2234.attributes;
          let _0x21409e = _0x156ad8.id;
          let _0x59dfc8 = await fetch(domainV2 + "/api/application/nests/" + nestidV2 + "/eggs/" + eggV2, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0x1c8e96 = await _0x59dfc8.json();
          let _0x4e9c0f = _0x1c8e96.attributes.startup;
          let _0x3d8a24 = _0x549401(Date.now());
          let _0x3b8d3d = await fetch(domainV2 + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            },
            body: JSON.stringify({
              name: _0x46edfa,
              description: _0x3d8a24,
              user: _0x21409e,
              egg: parseInt(eggV2),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x4e9c0f,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x5b6f37,
                swap: 0,
                disk: _0x224b39,
                io: 500,
                cpu: _0x20e755
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(locV2)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x88249b = await _0x3b8d3d.json();
          if (_0x88249b.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x88249b.errors[0], null, 2));
          }
          let _0x369796 = _0x88249b.attributes;
          let _0x3d2c1d = _0x5ed4e1.chat !== _0x33e047 ? _0x33e047 : _0x5ed4e1.chat;
          let _0x189749 = "\n*Berikut Detail Akun Panel Anda📦*\n‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n> *📡 ID SERVER (" + _0x369796.id + ")* \n*👤 USERNAME :* " + _0x156ad8.username + "\n*🔐 PASSWORD :* " + _0x57b799 + "\n*🗓️ " + _0x549401(Date.now()) + "*\n\n- 🌐 SPEKSIFIKASI SERVER\n> *RAM : " + (_0x5b6f37 == "0" ? "Unlimited" : _0x5b6f37.split("").length > 4 ? _0x5b6f37.split("").slice(0, 2).join("") + "GB" : _0x5b6f37.charAt(0) + "GB") + "*\n> *DISK : " + (_0x224b39 == "0" ? "Unlimited" : _0x224b39.split("").length > 4 ? _0x224b39.split("").slice(0, 2).join("") + "GB" : _0x224b39.charAt(0) + "GB") + "*\n> *CPU : " + (_0x20e755 == "0" ? "Unlimited" : _0x20e755 + "%") + "*\n\n*🔗 DOMAIN ⬇️*\n>  " + global.domainV2 + "\n\n> *NOTE*\n* JANGAN SEBAR LINK\n* JANGAN PASANG SC DDOS\n* SIMPAN DATA PANEL DENGAN BAIK\n* INGIN CLAIM GARANSI WAJIB BAWA BUKTI TRANSAKSI\n* GARANSI 15 HARI\n\n> *TUTORIAL RUN BOT VIA PANEL : https://youtu.be/7p7CgbfLmsQ?si=foa1EGsBxFymf6Ln*\n    ";
          await _0x10b5e5.sendMessage(_0x3d2c1d, {
            text: _0x189749
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "listpanel-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x12d880 = await fetch(domainV2 + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0x26f04b = await _0x12d880.json();
          let _0x1e025e = _0x26f04b.data;
          if (!_0x1e025e || _0x1e025e.length < 1) {
            return _0x5ed4e1.reply("Tidak ada server panel!");
          }
          let _0x2e9277 = "\n *乂 List Server Panel Pterodactyl (V2)*\n";
          for (let _0x5cf36c of _0x1e025e) {
            let _0x87ed76 = _0x5cf36c.attributes;
            let _0x38642f = _0x87ed76.uuid.split("-")[0];
            let _0x10db81 = await fetch(domainV2 + "/api/client/servers/" + _0x38642f + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikeyV2
              }
            });
            let _0x1680e7 = await _0x10db81.json();
            let _0x1a4323 = _0x1680e7.attributes ? _0x1680e7.attributes.current_state : _0x87ed76.status;
            let _0xa8abe5 = _0x87ed76.limits.memory == 0 ? "Unlimited" : _0x87ed76.limits.memory >= 1000 ? Math.floor(_0x87ed76.limits.memory / 1000) + "GB" : _0x87ed76.limits.memory + "MB";
            let _0x2dc84f = _0x87ed76.limits.cpu == 0 ? "Unlimited" : _0x87ed76.limits.cpu + "%";
            let _0x3cd36a = _0x87ed76.limits.disk == 0 ? "Unlimited" : _0x87ed76.limits.disk >= 1000 ? Math.floor(_0x87ed76.limits.disk / 1000) + "GB" : _0x87ed76.limits.disk + "MB";
            _0x2e9277 += "\n 📡 *" + _0x87ed76.id + " >> [ " + _0x87ed76.name + " ]*\n *• Ram :* " + _0xa8abe5 + "\n *• CPU :* " + _0x2dc84f + "\n *• Disk :* " + _0x3cd36a + "\n *• Created :* " + _0x87ed76.created_at.split("T")[0] + "\n";
          }
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x2e9277
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "delpanel-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("id server");
          }
          let _0x910b93 = await fetch(domainV2 + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0x472414 = await _0x910b93.json();
          let _0x28d104 = _0x472414.data;
          if (!_0x28d104 || _0x28d104.length < 1) {
            return _0x5ed4e1.reply("Tidak ada server ditemukan di panel V2!");
          }
          let _0x25d7fa = _0x28d104.find(_0x5f37bc => Number(_0x5ef4a1) === _0x5f37bc.attributes.id);
          if (!_0x25d7fa) {
            return _0x5ed4e1.reply("Server dengan ID tersebut tidak ditemukan!");
          }
          let _0x33cda1 = _0x25d7fa.attributes.name.toLowerCase();
          let _0x4de455 = _0x25d7fa.attributes.name;
          let _0x4f75d1 = await fetch(domainV2 + "/api/application/servers/" + _0x25d7fa.attributes.id, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          if (!_0x4f75d1.ok) {
            return _0x5ed4e1.reply("Gagal menghapus server. Coba periksa ID atau API key!");
          }
          let _0x18926b = await fetch(domainV2 + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0xe437e5 = await _0x18926b.json();
          let _0x20615c = _0xe437e5.data;
          let _0x5e84a3 = _0x20615c.find(_0x902a02 => _0x902a02.attributes.first_name.toLowerCase() === _0x33cda1);
          if (_0x5e84a3) {
            await fetch(domainV2 + "/api/application/users/" + _0x5e84a3.attributes.id, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikeyV2
              }
            });
          }
          await _0x5ed4e1.reply("Sukses menghapus server panel *" + _0x514f36(_0x4de455) + "* beserta user terkait dari *Panel V2*");
        }
        break;
      case "cadmin-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("*Contoh Command :*\n\n*.cadmin-v2* username,6283XX");
          }
          let _0x5aee5f;
          let _0x4b25bd;
          let _0x4c94f8 = _0x5ef4a1.split(",");
          if (_0x4c94f8.length > 1) {
            let [_0x4f4e9d, _0x5d2a87] = _0x4c94f8;
            if (!_0x4f4e9d || !_0x5d2a87) {
              return _0x5ed4e1.reply("*Contoh Command :*\n\n*.cadmin-v2* username\n*.cadmin-v2* username,6283XX");
            }
            _0x5aee5f = _0x5d2a87.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            _0x4b25bd = _0x4f4e9d.toLowerCase();
          } else {
            _0x4b25bd = _0x5ef4a1.toLowerCase();
            _0x5aee5f = _0x5ed4e1.chat;
          }
          let _0x80593c = await _0x10b5e5.onWhatsApp(_0x5aee5f.split("@")[0]);
          if (_0x80593c.length < 1) {
            return _0x5ed4e1.reply("Nomor target tidak terdaftar di WhatsApp!");
          }
          let _0x1a26e3 = _0x4b25bd;
          let _0xf7aeb8 = _0x1a26e3 + "@gmail.com";
          let _0x1fc480 = _0x514f36(_0x1a26e3);
          let _0x45d82 = _0x1a26e3 + crypto.randomBytes(2).toString("hex");
          let _0x2a2238 = await fetch(domainV2 + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            },
            body: JSON.stringify({
              email: _0xf7aeb8,
              username: _0x1a26e3,
              first_name: _0x1fc480,
              last_name: "Admin",
              root_admin: true,
              language: "en",
              password: _0x45d82
            })
          });
          let _0x578250 = await _0x2a2238.json();
          if (_0x578250.errors) {
            return _0x5ed4e1.reply(JSON.stringify(_0x578250.errors[0], null, 2));
          }
          let _0x4c173b = _0x578250.attributes;
          let _0x1a4a5f = _0x5ed4e1.chat !== _0x5aee5f ? _0x5aee5f : _0x5ed4e1.chat;
          if (_0x5ed4e1.chat !== _0x5aee5f) {
            await _0x5ed4e1.reply("Akun admin panel *" + _0x514f36(_0x1a26e3) + "* berhasil dibuat! Data dikirim ke nomor " + _0x5aee5f.split("@")[0]);
          }
          let _0x4b96fa = "\n*Berikut Detail Akun Admin Panel V2 📦*\n‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n*📡 ID User:* " + _0x4c173b.id + "\n*👤 Username:* " + _0x4c173b.username + "\n*🔐 Password:* " + _0x45d82 + "\n*🗓️ " + _0x549401(Date.now()) + "*\n\n*🌐 Panel:* " + global.domainV2 + "\n\n*Syarat & Ketentuan:*\n• Expired akun 1 bulan\n• Simpan data ini baik-baik\n• Jangan asal hapus server!\n• Ketahuan maling sc, auto delete akun tanpa reff!\n";
          await _0x10b5e5.sendMessage(_0x1a4a5f, {
            text: _0x4b96fa
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "listadmin-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x3b50fc = await fetch(domainV2 + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0x2b369c = await _0x3b50fc.json();
          let _0x212a56 = _0x2b369c.data;
          if (!_0x212a56 || _0x212a56.length < 1) {
            return _0x5ed4e1.reply("Tidak ada admin panel di V2");
          }
          let _0x9a2b59 = "\n*乂 List Admin Panel V2 Pterodactyl*\n";
          _0x212a56.forEach(_0x8f0c55 => {
            if (_0x8f0c55.attributes.root_admin !== true) {
              return;
            }
            _0x9a2b59 += "\n📡 *" + _0x8f0c55.attributes.id + " >> [ " + _0x8f0c55.attributes.first_name + " ]*\n" + ("• Nama : " + _0x8f0c55.attributes.first_name + "\n") + ("• Created : " + _0x8f0c55.attributes.created_at.split("T")[0] + "\n");
          });
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x9a2b59.trim()
          }, {
            quoted: _0x37643e
          });
        }
        break;
      case "deladmin-v2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("idnya");
          }
          let _0xd599c8 = await fetch(domainV2 + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikeyV2
            }
          });
          let _0xd9abb3 = await _0xd599c8.json();
          let _0x2bfe07 = _0xd9abb3.data;
          let _0x69b9da = null;
          let _0x843ddb = null;
          let _0x4d0f06 = false;
          for (let _0x14f179 of _0x2bfe07) {
            if (_0x14f179.attributes.id == _0x16f85c[0] && _0x14f179.attributes.root_admin === true) {
              _0x69b9da = _0x14f179.attributes.username;
              _0x843ddb = _0x14f179.attributes.id;
              let _0x1ed442 = await fetch(domainV2 + "/api/application/users/" + _0x843ddb, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikeyV2
                }
              });
              _0x4d0f06 = _0x1ed442.ok;
              break;
            }
          }
          if (!_0x4d0f06) {
            return _0x5ed4e1.reply("Gagal menghapus akun!\nID user tidak ditemukan atau bukan admin.");
          }
          await _0x5ed4e1.reply("Sukses menghapus akun admin panel *" + _0x514f36(_0x69b9da) + "*");
        }
        break;
      case "clearserver":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          await _0x5ed4e1.reply("Memproses penghapusan semua user & server panel yang bukan admin");
          try {
            const _0x13f7b0 = global.domain;
            const _0x56bdbe = global.apikey;
            const _0x2f8282 = {
              Authorization: "Bearer " + _0x56bdbe,
              "Content-Type": "application/json",
              Accept: "application/json"
            };
            async function _0xa3ff0() {
              try {
                const _0x34227e = await axios.get(_0x13f7b0 + "/api/application/users", {
                  headers: _0x2f8282
                });
                return _0x34227e.data.data;
              } catch (_0x300bb6) {
                _0x5ed4e1.reply(JSON.stringify(_0x300bb6.response?.data || _0x300bb6.message, null, 2));
                return [];
              }
            }
            async function _0x50204b() {
              try {
                const _0x4085cd = await axios.get(_0x13f7b0 + "/api/application/servers", {
                  headers: _0x2f8282
                });
                return _0x4085cd.data.data;
              } catch (_0x551a00) {
                _0x5ed4e1.reply(JSON.stringify(_0x551a00.response?.data || _0x551a00.message, null, 2));
                return [];
              }
            }
            async function _0x453f21(_0x50b667) {
              try {
                await axios.delete(_0x13f7b0 + "/api/application/servers/" + _0x50b667, {
                  headers: _0x2f8282
                });
                console.log("Server " + _0x50b667 + " berhasil dihapus.");
              } catch (_0x155bb4) {
                console.error("Gagal menghapus server " + _0x50b667 + ":", _0x155bb4.response?.data || _0x155bb4.message);
              }
            }
            async function _0x5009c5(_0x379db0) {
              try {
                await axios.delete(_0x13f7b0 + "/api/application/users/" + _0x379db0, {
                  headers: _0x2f8282
                });
                console.log("User " + _0x379db0 + " berhasil dihapus.");
              } catch (_0x19b5ac) {
                console.error("Gagal menghapus user " + _0x379db0 + ":", _0x19b5ac.response?.data || _0x19b5ac.message);
              }
            }
            async function _0xc82650() {
              const _0x27faa1 = await _0xa3ff0();
              const _0x1de5dd = await _0x50204b();
              let _0x3ef9a5 = 0;
              for (const _0x44bd8f of _0x27faa1) {
                if (_0x44bd8f.attributes.root_admin) {
                  console.log("Lewati admin: " + _0x44bd8f.attributes.username);
                  continue;
                }
                const _0x10b5b5 = _0x44bd8f.attributes.id;
                const _0xb44c35 = _0x44bd8f.attributes.email;
                console.log("Menghapus user: " + _0x44bd8f.attributes.username + " (" + _0xb44c35 + ")");
                const _0x4a600a = _0x1de5dd.filter(_0x53063f => _0x53063f.attributes.user === _0x10b5b5);
                for (const _0x3ba365 of _0x4a600a) {
                  await _0x453f21(_0x3ba365.attributes.id);
                  _0x3ef9a5 += 1;
                }
                await _0x5009c5(_0x10b5b5);
              }
              await _0x5ed4e1.reply("Berhasil menghapus " + _0x3ef9a5 + " user & server panel yang bukan admin.");
            }
            return _0xc82650();
          } catch (_0x4bf1f2) {
            return _0x5ed4e1.reply("" + JSON.stringify(_0x4bf1f2, null, 2));
          }
        }
        break;
      case "clearuser":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply("*[ System Notice ]* Khusus Owner");
          }
          try {
            let _0xdc4b65 = await fetch(domain + "/api/application/users", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              }
            });
            let _0x2e3f7a = await _0xdc4b65.json();
            let _0x37a9e9 = _0x2e3f7a.data;
            if (!_0x37a9e9 || _0x37a9e9.length === 0) {
              return _0x5ed4e1.reply("Tidak ada user yang ditemukan.");
            }
            for (let _0xfa0ed4 of _0x37a9e9) {
              let _0x323790 = _0xfa0ed4.attributes;
              if (!_0x323790.root_admin) {
                let _0x5bac6b = await fetch(domain + "/api/application/users/" + _0x323790.id, {
                  method: "DELETE",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + apikey
                  }
                });
                if (_0x5bac6b.ok) {
                  _0x5ed4e1.reply("*Berhasil menghapus user dengan ID: " + _0x323790.id + "*");
                } else {
                  let _0x24384c = await _0x5bac6b.text();
                  _0x5ed4e1.reply("Gagal menghapus user dengan ID: " + _0x323790.id + ". Error: " + _0x5bac6b.status + " - " + _0x24384c);
                }
              }
            }
            _0x5ed4e1.reply("*Semua user kecuali admin berhasil dihapus!*");
          } catch (_0x9fffed) {
            return _0x5ed4e1.reply("Terjadi kesalahan: " + _0x9fffed.message);
          }
        }
        break;
      case "clearadmin":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply("*[ System Notice ]* Khusus Owner");
          }
          const _0x22f53e = _0x1e0f3d.trim();
          const _0x4797ec = _0x22f53e.split(",").slice(1).map(_0x251bf8 => _0x251bf8.trim());
          if (_0x4797ec.length === 0) {
            return _0x5ed4e1.reply("Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50");
          }
          try {
            let _0x6fe647 = await fetch(domain + "/api/application/users", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey
              }
            });
            let _0x155cce = await _0x6fe647.json();
            let _0x407340 = _0x155cce.data;
            if (!_0x407340 || _0x407340.length === 0) {
              return _0x5ed4e1.reply("Tidak ada user yang ditemukan.");
            }
            for (let _0xf84652 of _0x407340) {
              let _0x54507f = _0xf84652.attributes;
              if (_0x4797ec.includes(_0x54507f.id.toString())) {
                _0x5ed4e1.reply("Mengabaikan user dengan ID: " + _0x54507f.id + " (" + _0x54507f.username + ")\n> *_© Developer : " + global.namaOwner + "_*");
                continue;
              }
              let _0x128aba = await fetch(domain + "/api/application/users/" + _0x54507f.id, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              if (_0x128aba.ok) {
                _0x5ed4e1.reply("Berhasil menghapus user dengan ID: " + _0x54507f.id + " (" + _0x54507f.username + ")\n> *_© Developer : " + global.namaOwner + "_*");
              } else {
                let _0x26ab70 = await _0x128aba.text();
                _0x5ed4e1.reply("Gagal menghapus user dengan ID: " + _0x54507f.id + ". Error: " + _0x128aba.status + " - " + _0x26ab70);
              }
            }
            _0x5ed4e1.reply("Semua user, kecuali yang dikecualikan, berhasil dihapus!");
          } catch (_0xab415c) {
            return _0x5ed4e1.reply("Terjadi kesalahan: " + _0xab415c.message);
          }
        }
        break;
      case "clearadmin2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply("*[ System Notice ]* Khusus Owner");
          }
          const _0x5baa8e = _0x1e0f3d.trim();
          const _0x435a6a = _0x5baa8e.split(",").slice(1).map(_0x264303 => _0x264303.trim());
          if (_0x435a6a.length === 0) {
            return _0x5ed4e1.reply("Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50");
          }
          try {
            let _0x1fa9d0 = await fetch(domainav2 + "/api/application/users", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikeyV2
              }
            });
            let _0x258b6a = await _0x1fa9d0.json();
            let _0x982c0d = _0x258b6a.data;
            if (!_0x982c0d || _0x982c0d.length === 0) {
              return _0x5ed4e1.reply("Tidak ada user yang ditemukan.");
            }
            for (let _0x55543c of _0x982c0d) {
              let _0x2280d5 = _0x55543c.attributes;
              if (_0x435a6a.includes(_0x2280d5.id.toString())) {
                _0x5ed4e1.reply("Mengabaikan user dengan ID: " + _0x2280d5.id + " (" + _0x2280d5.username + ")\n> *_© Developer : " + global.namaOwner + "_*");
                continue;
              }
              let _0x21af5c = await fetch(domainV2 + "/api/application/users/" + _0x2280d5.id, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikeyV2
                }
              });
              if (_0x21af5c.ok) {
                _0x5ed4e1.reply("Berhasil menghapus user dengan ID: " + _0x2280d5.id + " (" + _0x2280d5.username + ")\n> *_© Developer : " + global.namaOwner + "_*");
              } else {
                let _0x24944a = await _0x21af5c.text();
                _0x5ed4e1.reply("Gagal menghapus user dengan ID: " + _0x2280d5.id + ". Error: " + _0x21af5c.status + " - " + _0x24944a);
              }
            }
            _0x5ed4e1.reply("Semua user, kecuali yang dikecualikan, berhasil dihapus!");
          } catch (_0x3917b5) {
            return _0x5ed4e1.reply("Terjadi kesalahan: " + _0x3917b5.message);
          }
        }
        break;
      case "clearserver2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          await _0x5ed4e1.reply("Memproses penghapusan semua user & server panel yang bukan admin");
          try {
            const _0x47e296 = global.domainV2;
            const _0x47956b = global.apikeyV2;
            const _0x114d3e = {
              Authorization: "Bearer " + _0x47956b,
              "Content-Type": "application/json",
              Accept: "application/json"
            };
            async function _0x5132f6() {
              try {
                const _0x480cdd = await axios.get(_0x47e296 + "/api/application/users", {
                  headers: _0x114d3e
                });
                return _0x480cdd.data.data;
              } catch (_0xcc0233) {
                _0x5ed4e1.reply(JSON.stringify(_0xcc0233.response?.data || _0xcc0233.message, null, 2));
                return [];
              }
            }
            async function _0x1f4df6() {
              try {
                const _0x2d875f = await axios.get(_0x47e296 + "/api/application/servers", {
                  headers: _0x114d3e
                });
                return _0x2d875f.data.data;
              } catch (_0x2ec87f) {
                _0x5ed4e1.reply(JSON.stringify(_0x2ec87f.response?.data || _0x2ec87f.message, null, 2));
                return [];
              }
            }
            async function _0x563f47(_0x2c9185) {
              try {
                await axios.delete(_0x47e296 + "/api/application/servers/" + _0x2c9185, {
                  headers: _0x114d3e
                });
                console.log("Server " + _0x2c9185 + " berhasil dihapus.");
              } catch (_0x555563) {
                console.error("Gagal menghapus server " + _0x2c9185 + ":", _0x555563.response?.data || _0x555563.message);
              }
            }
            async function _0x470122(_0x2210ff) {
              try {
                await axios.delete(_0x47e296 + "/api/application/users/" + _0x2210ff, {
                  headers: _0x114d3e
                });
                console.log("User " + _0x2210ff + " berhasil dihapus.");
              } catch (_0x506ec0) {
                console.error("Gagal menghapus user " + _0x2210ff + ":", _0x506ec0.response?.data || _0x506ec0.message);
              }
            }
            async function _0x3c18b3() {
              const _0x56eb17 = await _0x5132f6();
              const _0x19b967 = await _0x1f4df6();
              let _0x51a5dd = 0;
              for (const _0x585499 of _0x56eb17) {
                if (_0x585499.attributes.root_admin) {
                  console.log("Lewati admin: " + _0x585499.attributes.username);
                  continue;
                }
                const _0x458de8 = _0x585499.attributes.id;
                const _0xf02c0a = _0x585499.attributes.email;
                console.log("Menghapus user: " + _0x585499.attributes.username + " (" + _0xf02c0a + ")");
                const _0x1183a2 = _0x19b967.filter(_0x3792fa => _0x3792fa.attributes.user === _0x458de8);
                for (const _0x5c11ff of _0x1183a2) {
                  await _0x563f47(_0x5c11ff.attributes.id);
                  _0x51a5dd += 1;
                }
                await _0x470122(_0x458de8);
              }
              await _0x5ed4e1.reply("Berhasil menghapus " + _0x51a5dd + " user & server panel yang bukan admin.");
            }
            return _0x3c18b3();
          } catch (_0x34da09) {
            return _0x5ed4e1.reply("" + JSON.stringify(_0x34da09, null, 2));
          }
        }
        break;
      case "clearuser2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply("*[ System Notice ]* Khusus Owner");
          }
          try {
            let _0x11d0af = await fetch(domainV2 + "/api/application/users", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikeyV2
              }
            });
            let _0x359bef = await _0x11d0af.json();
            let _0x487890 = _0x359bef.data;
            if (!_0x487890 || _0x487890.length === 0) {
              return _0x5ed4e1.reply("Tidak ada user yang ditemukan.");
            }
            for (let _0x47b04d of _0x487890) {
              let _0x2ba126 = _0x47b04d.attributes;
              if (!_0x2ba126.root_admin) {
                let _0x4faba9 = await fetch(domainV2 + "/api/application/users/" + _0x2ba126.id, {
                  method: "DELETE",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + apikeyV2
                  }
                });
                if (_0x4faba9.ok) {
                  _0x5ed4e1.reply("*Berhasil menghapus user dengan ID: " + _0x2ba126.id + "*");
                } else {
                  let _0x3c2678 = await _0x4faba9.text();
                  _0x5ed4e1.reply("Gagal menghapus user dengan ID: " + _0x2ba126.id + ". Error: " + _0x4faba9.status + " - " + _0x3c2678);
                }
              }
            }
            _0x5ed4e1.reply("*Semua user kecuali admin berhasil dihapus!*");
          } catch (_0x294e98) {
            return _0x5ed4e1.reply("Terjadi kesalahan: " + _0x294e98.message);
          }
        }
        break;
      case "antilink":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
          if (!/on|off/.test(_0x5ef4a1)) {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
          let _0x569d09;
          let _0x4bdf24;
          let _0x46611c;
          if (_0x56e505 == "antilink") {
            _0x569d09 = global.db.groups.antilink;
            _0x4bdf24 = "Antilink";
            _0x46611c = async _0x568d1d => {
              global.db.groups.antilink = _0x568d1d;
            };
          }
          if (_0x5ef4a1 == "on") {
            if (_0x569d09 == true) {
              return _0x5ed4e1.reply("*" + _0x4bdf24 + " sudah aktif!*");
            }
            _0x46611c(true);
            _0x5ed4e1.reply("*" + _0x4bdf24 + " berhasil di aktifkan ✅*");
          }
          if (_0x5ef4a1 == "off") {
            if (_0x569d09 == false) {
              return _0x5ed4e1.reply("*" + _0x4bdf24 + " sudah tidak aktif!*");
            }
            _0x46611c(false);
            _0x5ed4e1.reply("*" + _0x4bdf24 + " berhasil di matikan ✅*");
          }
        }
        break;
      case "add":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          if (_0x5ef4a1) {
            const _0x45657a = _0x5ef4a1 ? _0x5ef4a1.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;
            var _0x231eb0 = await con.onWhatsApp(_0x45657a.split("@")[0]);
            if (_0x231eb0.length < 1) {
              return _0x5ed4e1.reply("Nomor tidak terdaftar di whatsapp");
            }
            const _0x2f7614 = await _0x10b5e5.groupParticipantsUpdate(_0x5ed4e1.chat, [_0x45657a], "add");
            if (Object.keys(_0x2f7614).length == 0) {
              return _0x5ed4e1.reply("Berhasil Menambahkan " + _0x45657a.split("@")[0] + " Kedalam Grup Ini");
            } else {
              return _0x5ed4e1.reply(JSON.stringify(_0x2f7614, null, 2));
            }
          } else {
            return _0x5ed4e1.reply(_0x39b03f("62838###"));
          }
        }
        break;
      case "kick":
      case "dor":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botAdmin);
          }
          if (_0x5ef4a1 || _0x5ed4e1.quoted) {
            const _0x54af18 = _0x5ef4a1 ? _0x5ef4a1.replace(/\D/g, "") + "@s.whatsapp.net" : _0x5ed4e1.quoted?.sender;
            await _0x10b5e5.groupParticipantsUpdate(_0x5ed4e1.chat, [_0x54af18], "remove").catch(_0x5b9378 => _0x5ed4e1.reply("Gagal!"));
          } else {
            _0x5ed4e1.reply("Contoh: " + (_0x340274 + _0x56e505) + " 62xxx");
          }
        }
        break;
      case "leave":
        {
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          await _0x5ed4e1.reply("Baik, Saya Akan Keluar Dari Grup Ini");
          await _0x35e501(4000);
          await _0x10b5e5.groupLeave(_0x5ed4e1.chat);
        }
        break;
      case "resetlinkgc":
        {
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          await _0x10b5e5.groupRevokeInvite(_0x5ed4e1.chat);
          _0x5ed4e1.reply("Berhasil mereset link grup ✅");
        }
        break;
      case "tagall":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("pesannya"));
          }
          let _0x2f3139 = _0x5ef4a1 + "\n\n";
          let _0x748742 = await _0x5ed4e1.metadata.participants.map(_0xca88a => _0xca88a.id).filter(_0x5525b5 => _0x5525b5 !== _0x41d58d && _0x5525b5 !== _0x5ed4e1.sender);
          await _0x748742.forEach(_0x2d6a02 => {
            _0x2f3139 += "@" + _0x2d6a02.split("@")[0] + "\n";
          });
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x2f3139,
            mentions: [..._0x748742]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "linkgc":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          const _0x162f97 = "https://chat.whatsapp.com/" + (await _0x10b5e5.groupInviteCode(_0x5ed4e1.chat));
          var _0x49752f = "\n" + _0x162f97 + "\n";
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x49752f,
            matchedText: "" + _0x162f97
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "ht":
      case "hidetag":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("pesannya"));
          }
          let _0x382cf9 = _0x5ed4e1.metadata.participants.map(_0x5dedfd => _0x5dedfd.id);
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: _0x5ef4a1,
            mentions: [..._0x382cf9]
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "joingc":
      case "join":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("linkgcnya"));
          }
          if (!_0x5ef4a1.includes("chat.whatsapp.com")) {
            return _0x5ed4e1.reply("Link tautan tidak valid");
          }
          let _0x22542d = _0x5ef4a1.split("https://chat.whatsapp.com/")[1];
          let _0x166224 = await _0x10b5e5.groupAcceptInvite(_0x22542d);
          _0x5ed4e1.reply("Berhasil bergabung ke dalam grup " + _0x166224);
        }
        break;
      case "welcome":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
          let _0x5c9f45 = _0x5ef4a1.toLowerCase();
          if (_0x5c9f45 == "on") {
            if (global.db.groups[_0x5ed4e1.chat].welcome == true) {
              return _0x5ed4e1.reply("*Welcome* di grup ini sudah aktif!");
            }
            global.db.groups[_0x5ed4e1.chat].welcome = true;
            return _0x5ed4e1.reply("Berhasil menyalakan *welcome* di grup ini");
          } else if (_0x5c9f45 == "off") {
            if (global.db.groups[_0x5ed4e1.chat].welcome == false) {
              return _0x5ed4e1.reply("*Welcome* di grup ini tidak aktif!");
            }
            global.db.groups[_0x5ed4e1.chat].welcome = false;
            return _0x5ed4e1.reply("Berhasil mematikan *welcome* di grup ini");
          } else {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
        }
        break;
      case "mute":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
          let _0x1714a3 = _0x5ef4a1.toLowerCase();
          if (_0x1714a3 == "on") {
            if (global.db.groups[_0x5ed4e1.chat].mute == true) {
              return _0x5ed4e1.reply("*Mute* di grup ini sudah aktif!");
            }
            global.db.groups[_0x5ed4e1.chat].mute = true;
            return _0x5ed4e1.reply("Berhasil menyalakan *mute* di grup ini");
          } else if (_0x1714a3 == "off") {
            if (global.db.groups[_0x5ed4e1.chat].mute == false) {
              return _0x5ed4e1.reply("*Mute* di grup ini tidak aktif!");
            }
            global.db.groups[_0x5ed4e1.chat].mute = false;
            return _0x5ed4e1.reply("Berhasil mematikan *mute* di grup ini");
          } else {
            return _0x5ed4e1.reply(_0x39b03f("on/off"));
          }
        }
        break;
      case "closegc":
      case "close":
      case "opengc":
      case "open":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          if (!_0x503b7c && !_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (/open|opengc/.test(_0x56e505)) {
            if (_0x5ed4e1.metadata.announce == false) {
              return;
            }
            await _0x10b5e5.groupSettingUpdate(_0x5ed4e1.chat, "not_announcement");
          } else if (/closegc|close/.test(_0x56e505)) {
            if (_0x5ed4e1.metadata.announce == true) {
              return;
            }
            await _0x10b5e5.groupSettingUpdate(_0x5ed4e1.chat, "announcement");
          } else {}
        }
        break;
      case "kudetagc":
      case "kudeta":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x4eba18 = await _0x5ed4e1.metadata.participants.map(_0x31453d => _0x31453d.id).filter(_0x3a98f7 => _0x3a98f7 !== _0x41d58d && _0x3a98f7 !== _0x5ed4e1.sender);
          if (_0x4eba18.length < 1) {
            return _0x5ed4e1.reply("Grup Ini Sudah Tidak Ada Member!");
          }
          await _0x5ed4e1.reply("Kudeta Grup By " + global.namaOwner + " Starting 🔥");
          for (let _0x1354fa of _0x4eba18) {
            await _0x10b5e5.groupParticipantsUpdate(_0x5ed4e1.chat, [_0x1354fa], "remove");
            await _0x35e501(1000);
          }
          await _0x5ed4e1.reply("Kudeta Grup Telah Berhasil 🏴‍☠️");
        }
        break;
      case "promote":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botAdmin);
          }
          if (_0x5ef4a1 || _0x5ed4e1.quoted) {
            const _0x1b5745 = _0x5ef4a1 ? _0x5ef4a1.replace(/\D/g, "") + "@s.whatsapp.net" : _0x5ed4e1.quoted?.sender;
            _0x5ed4e1.reply("*KIW KIW ADA ADMIN BARU NI*");
            await _0x10b5e5.groupParticipantsUpdate(_0x5ed4e1.chat, [_0x1b5745], "promote").catch(_0x42050b => _0x5ed4e1.reply("Gagal!"));
          } else {
            _0x5ed4e1.reply("Contoh: " + (_0x340274 + _0x56e505) + " 62xxx");
          }
        }
        break;
      case "demote":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ed4e1.isAdmin) {
            return _0x5ed4e1.reply(msg.admin);
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botAdmin);
          }
          if (_0x5ef4a1 || _0x5ed4e1.quoted) {
            const _0x48ae73 = _0x5ef4a1 ? _0x5ef4a1.replace(/\D/g, "") + "@s.whatsapp.net" : _0x5ed4e1.quoted?.sender;
            _0x5ed4e1.reply("*YAHAHAHA BUKAN ADMIN LAGI*");
            await _0x10b5e5.groupParticipantsUpdate(_0x5ed4e1.chat, [_0x48ae73], "demote").catch(_0x2efd54 => _0x5ed4e1.reply("Gagal!"));
          } else {
            _0x5ed4e1.reply("Contoh: " + (_0x340274 + _0x56e505) + " 62xxx");
          }
        }
        break;
      case "opentime":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply("ᴋʜᴜsᴜs ɢʀᴏᴜᴘ");
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          if (!_0x16f85c[0] || isNaN(_0x16f85c[0])) {
            return _0x5ed4e1.reply("• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik");
          }
          const _0x516f10 = {
            detik: 1000,
            menit: 60000,
            jam: 3600000,
            hari: 86400000
          };
          const _0x1e3427 = _0x16f85c[1]?.toLowerCase();
          if (!_0x516f10[_0x1e3427]) {
            return _0x5ed4e1.reply("• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik");
          }
          const _0x42d101 = parseInt(_0x16f85c[0]) * _0x516f10[_0x1e3427];
          _0x5ed4e1.reply("Open time " + _0x16f85c[0] + " " + _0x1e3427 + " dimulai dari sekarang");
          setTimeout(() => {
            try {
              _0x10b5e5.groupSettingUpdate(_0x5ed4e1.chat, "not_announcement");
              _0x5ed4e1.reply("*Tepat waktu* grup dibuka oleh admin\nsekarang member dapat mengirim pesan");
            } catch (_0x102821) {
              _0x5ed4e1.reply("Terjadi kesalahan saat membuka grup");
              console.log(_0x102821);
            }
          }, _0x42d101);
        }
        break;
      case "closetime":
        {
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply("ᴋʜᴜsᴜs ɢʀᴏᴜᴘ");
          }
          if (!_0x5ed4e1.isBotAdmin) {
            return _0x5ed4e1.reply(msg.botadmin);
          }
          if (!_0x16f85c[0] || isNaN(_0x16f85c[0])) {
            return _0x5ed4e1.reply("• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik");
          }
          const _0x2aecad = {
            detik: 1000,
            menit: 60000,
            jam: 3600000,
            hari: 86400000
          };
          const _0x5a8b43 = _0x16f85c[1]?.toLowerCase();
          if (!_0x2aecad[_0x5a8b43]) {
            return _0x5ed4e1.reply("• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik");
          }
          const _0xb08714 = parseInt(_0x16f85c[0]) * _0x2aecad[_0x5a8b43];
          _0x5ed4e1.reply("Close time " + _0x16f85c[0] + " " + _0x5a8b43 + " dimulai dari sekarang");
          setTimeout(() => {
            try {
              _0x10b5e5.groupSettingUpdate(_0x5ed4e1.chat, "announcement");
              _0x5ed4e1.reply("*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan");
            } catch (_0x4c3bf1) {
              _0x5ed4e1.reply("Terjadi kesalahan saat menutup grup");
              console.log(_0x4c3bf1);
            }
          }, _0xb08714);
        }
        break;
      case "aws":
        {
          try {
            let _0x39b7e1 = _0x5ed4e1.quoted ? _0x5ed4e1.quoted : _0x5ed4e1;
            let _0x132e8c = (_0x39b7e1.msg || _0x39b7e1).mimetype || "";
            if (!_0x132e8c) {
              throw "Silakan kirim atau reply file/media untuk diupload";
            }
            let _0x2914d7 = await _0x39b7e1.download();
            let _0x5b5864 = _0x132e8c.split("/")[1] || "bin";
            let _0x5ac28e = path.join(os.tmpdir(), "upload_" + Date.now() + "." + _0x5b5864);
            fs.writeFileSync(_0x5ac28e, _0x2914d7);
            let _0x30254b = new FormData();
            _0x30254b.append("file", fs.createReadStream(_0x5ac28e));
            let {
              data: _0x1ed9f7
            } = await axios.post("https://fgsi1-restapi.hf.space/api/upload/uploadS3Aws", _0x30254b, {
              headers: _0x30254b.getHeaders()
            });
            fs.unlinkSync(_0x5ac28e);
            await _0x5ed4e1.reply(_0x1ed9f7.data.url);
          } catch (_0x4f9eb9) {
            _0x5ed4e1.reply(typeof _0x4f9eb9 === "string" ? _0x4f9eb9 : _0x4f9eb9.message);
          }
        }
        break;
      case "ip":
      case "getip":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          let _0x9d0d0b = await _0x2548f6("https://api64.ipify.org?format=json");
          _0x5ed4e1.reply("IP Panel : " + _0x9d0d0b.ip);
        }
        break;
      case "tourl":
      case "tourl2":
        {
          if (!/image|video/.test(_0x33222f)) {
            return _0x5ed4e1.reply(_0x39b03f("dengan reply foto/vidio"));
          }
          async function _0x1c2c09(_0x26c55e) {
            const _0x112abd = await import("node-fetch");
            const _0x3c8674 = _0x112abd.default;
            let {
              ext: _0x1b4598
            } = await fromBuffer(_0x26c55e);
            let _0x54a047 = new FormData();
            _0x54a047.append("fileToUpload", _0x26c55e, "file." + _0x1b4598);
            _0x54a047.append("reqtype", "fileupload");
            let _0xa68be4 = await _0x3c8674("https://catbox.moe/user/api.php", {
              method: "POST",
              body: _0x54a047
            });
            let _0x4aa606 = await _0xa68be4.text();
            return _0x4aa606;
          }
          let _0x3d5a81 = _0x5ed4e1.quoted ? await _0x5ed4e1.quoted.download() : await _0x5ed4e1.download();
          let _0x47e1aa = await _0x1c2c09(_0x3d5a81);
          await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            text: "*Url :* " + _0x47e1aa + "\n*Expired :* Permanen"
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "rvo":
        {
          try {
            if (!_0x5ed4e1.quoted || !/imageMessage|videoMessage/.test(_0x5ed4e1.quoted.mtype)) {
              return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
                text: "🚩 Reply view once media to use this command."
              }, {
                quoted: _0x5ed4e1
              });
            }
            let _0x131d4f = await _0x5ed4e1.quoted.download();
            let _0x26ff27 = _0x5ed4e1.quoted.mtype.includes("video") ? "video" : "image";
            await _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              [_0x26ff27]: _0x131d4f,
              caption: _0x5ed4e1.quoted.caption || ""
            }, {
              quoted: _0x5ed4e1
            });
          } catch (_0x29995d) {
            console.error(_0x29995d);
            _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              text: JSON.stringify(_0x29995d, null, 2)
            }, {
              quoted: _0x5ed4e1
            });
          }
        }
        ;
        break;
      case "masukan":
      case "feedback":
        if (!_0x5ef4a1) {
          return _0x5ed4e1.reply("📩 *Gunakan format:*\n.masukin [isi pesan]\n\nContoh: .masukan Bot ini keren!");
        }
        let _0x3bae03 = {
          pengirim: _0x5ed4e1.sender,
          isi: _0x5ef4a1,
          waktu: new Date().toLocaleString()
        };
        let _0x11e7d6 = "./data/masukan.json";
        if (!fs.existsSync(_0x11e7d6)) {
          fs.writeFileSync(_0x11e7d6, JSON.stringify([]));
        }
        let _0x3c783d = JSON.parse(fs.readFileSync(_0x11e7d6));
        _0x3c783d.push(_0x3bae03);
        fs.writeFileSync(_0x11e7d6, JSON.stringify(_0x3c783d, null, 2));
        let _0x14a2ef = "628567858991@s.whatsapp.net";
        _0x10b5e5.sendMessage(_0x14a2ef, {
          text: "📥 *Masukan Baru!*\n\n📌 *Dari:* @" + _0x5ed4e1.sender.split("@")[0] + "\n💬 *Pesan:* " + _0x5ef4a1 + "\n🕒 *Waktu:* " + _0x3bae03.waktu,
          mentions: [_0x5ed4e1.sender]
        });
        _0x5ed4e1.reply("✅ *Masukan kamu sudah dikirim ke Owner!* Terima kasih atas feedbacknya.");
        break;
      case "pushkontak":
      case "puskontak":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("pesannya");
          }
          const _0xd5c704 = _0x5ef4a1;
          const _0x1234f5 = _0x5ed4e1.chat;
          const _0x392575 = await _0x10b5e5.groupMetadata(_0x5ed4e1.chat);
          const _0x44b51c = await _0x392575.participants.filter(_0x5a871e => _0x5a871e.id.endsWith(".net")).map(_0x3559db => _0x3559db.id);
          await _0x5ed4e1.reply("Memproses pushkontak ke *" + _0x44b51c.length + "* member grup");
          for (let _0x30dbe8 of _0x44b51c) {
            if (_0x30dbe8 !== _0x41d58d && _0x30dbe8.split("@")[0] !== global.owner) {
              await _0x10b5e5.sendMessage(_0x30dbe8, {
                text: _0xd5c704
              }, {
                quoted: qtext
              });
              await _0x35e501(global.delaypush);
            }
          }
          await _0x10b5e5.sendMessage(_0x1234f5, {
            text: "*Pushkontak Berhasil ✅*\nTotal member : " + _0x44b51c.length
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "pushkontak2":
      case "puskontak2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("pesannya");
          }
          const _0x47f43a = await _0x10b5e5.groupFetchAllParticipating();
          let _0x1dd36f = await Object.keys(_0x47f43a);
          global.textpushkontak = _0x5ef4a1;
          let _0x563beb = [];
          for (let _0x40fb36 of _0x1dd36f) {
            await _0x563beb.push({
              title: _0x47f43a[_0x40fb36].subject,
              id: ".respushkontak " + _0x40fb36,
              description: _0x47f43a[_0x40fb36].participants.length + " Member"
            });
          }
          return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            buttons: [{
              buttonId: "action",
              buttonText: {
                displayText: "ini pesan interactiveMeta"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Pilih Grup",
                  sections: [{
                    rows: [..._0x563beb]
                  }]
                })
              }
            }],
            headerType: 1,
            viewOnce: true,
            text: "\nPilih Target Grup Pushkontak\n",
            contextInfo: {
              mentionedJid: [_0x5ed4e1.sender]
            }
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "respushkontak":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return;
          }
          if (!global.textpushkontak) {
            return;
          }
          const _0x3bb5a6 = _0x5ef4a1;
          const _0x2bf759 = global.textpushkontak;
          const _0x335eee = _0x5ed4e1.chat;
          const _0x2c4e63 = await _0x10b5e5.groupMetadata(_0x3bb5a6);
          const _0x4ff5fb = await _0x2c4e63.participants.filter(_0x5c07d2 => _0x5c07d2.id.endsWith(".net")).map(_0x62672 => _0x62672.id);
          await _0x5ed4e1.reply("Memproses *pushkontak* ke dalam grup *" + _0x2c4e63.subject + "*");
          for (let _0x5b9dc9 of _0x4ff5fb) {
            if (_0x5b9dc9 !== _0x41d58d && _0x5b9dc9.split("@")[0] !== global.owner) {
              await _0x10b5e5.sendMessage(_0x5b9dc9, {
                text: _0x2bf759
              }, {
                quoted: _0x12614c
              });
              await _0x35e501(global.delaypush);
            }
          }
          delete global.textpushkontak;
          await _0x10b5e5.sendMessage(_0x335eee, {
            text: "*Pushkontak Berhasil ✅*\nTotal member : " + _0x4ff5fb.length
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "savekontak":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ed4e1.isGroup) {
            return _0x5ed4e1.reply(msg.group);
          }
          try {
            const _0x4242f4 = await _0x5ed4e1.metadata;
            const _0x43e0a9 = _0x4242f4.participants.filter(_0x1d48cc => _0x1d48cc.id.endsWith(".net")).map(_0x2e7194 => _0x2e7194.id).filter(_0x5947c4 => _0x5947c4 !== _0x41d58d && _0x5947c4.split("@")[0] !== global.owner);
            if (!_0x43e0a9.length) {
              return _0x5ed4e1.reply("Tidak ada kontak yang bisa disimpan.");
            }
            const _0x1cca34 = JSON.parse(fs.readFileSync("./data/contacts.json", "utf8") || "[]");
            const _0x263fc0 = [...new Set([..._0x1cca34, ..._0x43e0a9])];
            fs.writeFileSync("./data/contacts.json", JSON.stringify(_0x263fc0, null, 2));
            const _0x350ddc = _0x263fc0.map(_0x3504fb => {
              const _0x993316 = _0x3504fb.split("@")[0];
              return ["BEGIN:VCARD", "VERSION:3.0", "FN:Contact - " + _0x993316, "TEL;type=CELL;type=VOICE;waid=" + _0x993316 + ":+" + _0x993316, "END:VCARD", ""].join("\n");
            }).join("");
            fs.writeFileSync("./data/contacts.vcf", _0x350ddc, "utf8");
            if (_0x5ed4e1.chat !== _0x5ed4e1.sender) {
              await _0x5ed4e1.reply("*Berhasil membuat file kontak ✅*\n\nFile kontak telah dikirim ke private chat\nTotal *" + _0x43e0a9.length + "* kontak");
            }
            await _0x10b5e5.sendMessage(_0x5ed4e1.sender, {
              document: fs.readFileSync("./data/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File kontak berhasil dibuat ✅\nTotal *" + _0x43e0a9.length + "* kontak",
              mimetype: "text/vcard"
            }, {
              quoted: _0x5ed4e1
            });
            fs.writeFileSync("./data/contacts.json", "[]");
            fs.writeFileSync("./data/contacts.vcf", "");
          } catch (_0x36cd87) {
            _0x5ed4e1.reply("Terjadi kesalahan saat menyimpan kontak:\n" + _0x36cd87.toString());
          }
        }
        break;
      case "savekontak2":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          const _0x390e4e = await _0x10b5e5.groupFetchAllParticipating();
          global.statussv = true;
          let _0x4a1503 = await Object.keys(_0x390e4e);
          let _0x3e3e00 = [];
          for (let _0x5b276b of _0x4a1503) {
            await _0x3e3e00.push({
              title: _0x390e4e[_0x5b276b].subject,
              id: ".ressavekontak " + _0x5b276b,
              description: _0x390e4e[_0x5b276b].participants.length + " Member"
            });
          }
          return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
            buttons: [{
              buttonId: "action",
              buttonText: {
                displayText: "ini pesan interactiveMeta"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Pilih Grup",
                  sections: [{
                    rows: [..._0x3e3e00]
                  }]
                })
              }
            }],
            headerType: 1,
            viewOnce: true,
            text: "\nPilih Target Grup Savekontak\n",
            contextInfo: {
              mentionedJid: [_0x5ed4e1.sender]
            }
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "ressavekontak":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (global.statussv == undefined) {
            return _0x5ed4e1.reply("ID Grup tidak ditemukan.");
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("ID Grup tidak ditemukan.");
          }
          try {
            const _0x2a2aa4 = await _0x10b5e5.groupMetadata(_0x5ef4a1.trim());
            const _0x159c8a = _0x2a2aa4.participants.filter(_0x464ad4 => _0x464ad4.id.endsWith(".net")).map(_0x27e1e1 => _0x27e1e1.id).filter(_0x1e8146 => _0x1e8146 !== _0x41d58d && _0x1e8146.split("@")[0] !== global.owner);
            if (!_0x159c8a.length) {
              return _0x5ed4e1.reply("Tidak ada kontak yang bisa disimpan.");
            }
            if (_0x5ef4a1 !== _0x5ed4e1.chat) {
              await _0x5ed4e1.reply("Memroses savekontak dari grup " + _0x2a2aa4.subject + " dengan total " + _0x159c8a.length + " member");
            }
            const _0x5ad7f2 = JSON.parse(fs.readFileSync("./data/contacts.json", "utf8") || "[]");
            const _0x5923b6 = [...new Set([..._0x5ad7f2, ..._0x159c8a])];
            fs.writeFileSync("./data/contacts.json", JSON.stringify(_0x5923b6, null, 2));
            const _0x415387 = _0x5923b6.map(_0x1368b0 => {
              const _0x28100a = _0x1368b0.split("@")[0];
              return ["BEGIN:VCARD", "VERSION:3.0", "FN:Contact - " + _0x28100a, "TEL;type=CELL;type=VOICE;waid=" + _0x28100a + ":+" + _0x28100a, "END:VCARD", ""].join("\n");
            }).join("");
            fs.writeFileSync("./data/contacts.vcf", _0x415387, "utf8");
            if (_0x5ed4e1.chat !== _0x5ed4e1.sender) {
              await _0x5ed4e1.reply("*Berhasil membuat file kontak ✅*\n\nFile kontak telah dikirim ke private chat\nTotal *" + _0x159c8a.length + "* kontak");
            }
            await _0x10b5e5.sendMessage(_0x5ed4e1.sender, {
              document: fs.readFileSync("./data/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File kontak berhasil dibuat ✅\nTotal *" + _0x159c8a.length + "* kontak",
              mimetype: "text/vcard"
            }, {
              quoted: _0x5ed4e1
            });
            fs.writeFileSync("./data/contacts.json", "[]");
            fs.writeFileSync("./data/contacts.vcf", "");
            delete global.statussv;
          } catch (_0x49aced) {
            _0x5ed4e1.reply("Terjadi kesalahan saat menyimpan kontak:\n" + _0x49aced.toString());
          }
        }
        break;
      case "jpm":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("Teksnya & foto (opsional)");
          }
          let _0x2c2b2c;
          const _0x590f59 = _0x33222f;
          if (/image/.test(_0x590f59)) {
            _0x2c2b2c = await _0x10b5e5.downloadAndSaveMediaMessage(_0x3ff73a);
          }
          const _0x370a8c = await _0x10b5e5.groupFetchAllParticipating();
          const _0x1386ad = Object.keys(_0x370a8c);
          let _0x558efe = 0;
          const _0x4643bd = _0x2c2b2c ? {
            image: await fs.readFileSync(_0x2c2b2c),
            caption: _0x5ef4a1
          } : {
            text: _0x5ef4a1
          };
          const _0x7eda46 = _0x5ed4e1.chat;
          await _0x5ed4e1.reply("Memproses " + (_0x2c2b2c ? "JPM teks & foto" : "JPM teks") + " ke " + _0x1386ad.length + " grup chat...");
          for (const _0x1115bb of _0x1386ad) {
            try {
              await _0x10b5e5.sendMessage(_0x1115bb, _0x4643bd, {
                quoted: _0x5ed4e1
              });
              _0x558efe++;
            } catch (_0x4d4dac) {
              console.error("Gagal kirim ke grup " + _0x1115bb + ":", _0x4d4dac);
            }
            await _0x35e501(global.delayjpm);
          }
          if (_0x2c2b2c) {
            await fs.unlinkSync(_0x2c2b2c);
          }
          await _0x10b5e5.sendMessage(_0x7eda46, {
            text: "JPM " + (_0x2c2b2c ? "teks & foto" : "teks") + " berhasil dikirim ke " + _0x558efe + " grup."
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "jpmht":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x39b03f("Teksnya & foto (opsional)");
          }
          let _0x43f6ff;
          const _0x22294c = _0x33222f;
          if (/image/.test(_0x22294c)) {
            _0x43f6ff = await _0x10b5e5.downloadAndSaveMediaMessage(_0x3ff73a);
          }
          const _0x169626 = await _0x10b5e5.groupFetchAllParticipating();
          const _0x215c1b = Object.keys(_0x169626);
          let _0x4dabb9 = 0;
          const _0x4fcff5 = _0x5ed4e1.chat;
          const _0x1086b2 = _0x43f6ff ? "teks & foto ht" : "teks ht";
          await _0x5ed4e1.reply("Memproses JPM *" + _0x1086b2 + "* ke " + _0x215c1b.length + " grup chat...");
          for (const _0xe3e8f2 of _0x215c1b) {
            try {
              const _0x43f0c5 = _0x169626[_0xe3e8f2].participants.map(_0x5c5ac4 => _0x5c5ac4.id);
              const _0x3ed616 = _0x43f6ff ? {
                image: await fs.readFileSync(_0x43f6ff),
                caption: _0x5ef4a1,
                mentions: _0x43f0c5
              } : {
                text: _0x5ef4a1,
                mentions: _0x43f0c5
              };
              await _0x10b5e5.sendMessage(_0xe3e8f2, _0x3ed616, {
                quoted: _0x5ed4e1
              });
              _0x4dabb9++;
            } catch (_0x444e56) {
              console.error("Gagal kirim ke grup " + _0xe3e8f2 + ":", _0x444e56);
            }
            await _0x35e501(global.delayjpm);
          }
          if (_0x43f6ff) {
            await fs.unlinkSync(_0x43f6ff);
          }
          await _0x10b5e5.sendMessage(_0x4fcff5, {
            text: "JPM *" + _0x1086b2 + "* berhasil dikirim ke " + _0x4dabb9 + " grup."
          }, {
            quoted: _0x5ed4e1
          });
        }
        break;
      case "19rujxl1e":
        {
          console.log(".");
        }
        break;
      case "uji":
        {
          console.log(_0x16f85c[0]);
          _0x10b5e5.appendResponseMessage(_0x5ed4e1, _0x16f85c[0]);
        }
        break;
      case "addcase":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1 && !_0x5ef4a1.startsWith("case")) {
            return _0x5ed4e1.reply("Masukkan Casenya!");
          }
          fs.readFile("yamzz.js", "utf8", (_0x46b735, _0x121935) => {
            if (_0x46b735) {
              console.error("Terjadi kesalahan saat membaca file:", _0x46b735);
              return;
            }
            const _0x402d50 = _0x121935.indexOf("case '19rujxl1e':");
            if (_0x402d50 !== -1) {
              const _0x53018a = _0x121935.slice(0, _0x402d50) + "\n" + ("" + _0x5ef4a1) + "\n" + _0x121935.slice(_0x402d50);
              fs.writeFile("yamzz.js", _0x53018a, "utf8", _0xed62a6 => {
                if (_0xed62a6) {
                  _0x5ed4e1.reply("Terjadi kesalahan saat menulis file: ", _0xed62a6);
                } else {
                  _0x5ed4e1.reply("Case berhasil ditambahkan");
                }
              });
            } else {
              _0x5ed4e1.reply("Gagal Menambahkan case!");
            }
          });
        }
        break;
      case "getcase":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("Masukkan Nama Casenya!");
          }
          try {
            const _0xe56388 = _0xa5d24 => {
              return "yamzz" + ("'" + _0xa5d24 + "'") + fs.readFileSync("yamzz.js").toString().split("case '" + _0xa5d24 + "'")[1].split("break")[0] + "break";
            };
            _0x5ed4e1.reply("" + _0xe56388(_0x5ef4a1));
          } catch (_0x4fc5ff) {
            _0x5ed4e1.reply("case " + _0x5ef4a1 + " tidak ditemukan!");
          }
        }
        break;
      case "delcase":
        {
          if (!_0x503b7c) {
            return _0x5ed4e1.reply(msg.owner);
          }
          if (!_0x5ef4a1) {
            return _0x5ed4e1.reply("Masukkan Nama Casenya!");
          }
          fs.readFile("yamzz.js", "utf8", (_0x927470, _0x3df617) => {
            if (_0x927470) {
              console.error("Terjadi kesalahan saat membaca file:", _0x927470);
              return;
            }
            const _0x426f05 = new RegExp("case\\s+'" + _0x5ef4a1.toLowerCase() + "':[\\s\\S]*?break", "g");
            const _0x5ceabe = _0x3df617.replace(_0x426f05, "");
            fs.writeFile("yamzz.js", _0x5ceabe, "utf8", _0xd11aa9 => {
              if (_0xd11aa9) {
                _0x5ed4e1.reply("Terjadi kesalahan saat menulis file: ", _0xd11aa9);
              } else {
                _0x5ed4e1.reply("Case berhasil dihapus dari file");
              }
            });
          });
        }
        break;
      default:
        if (_0x5ed4e1.text.startsWith("$")) {
          if (!_0x503b7c) {
            return;
          }
          exec(_0x456d2e.slice(2), (_0x2821a7, _0x1152da) => {
            if (_0x2821a7) {
              return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
                text: _0x2821a7.toString()
              }, {
                quoted: _0x5ed4e1
              });
            }
            if (_0x1152da) {
              return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
                text: util.format(_0x1152da)
              }, {
                quoted: _0x5ed4e1
              });
            }
          });
        }
        if (_0x5ed4e1.text.startsWith("=>")) {
          if (!_0x503b7c) {
            return;
          }
          try {
            const _0x1b14e9 = await eval(";(async () => { " + _0x5ef4a1 + " })();");
            return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              text: util.format(_0x1b14e9)
            }, {
              quoted: _0x5ed4e1
            });
          } catch (_0x11c288) {
            return _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              text: util.format(_0x11c288)
            }, {
              quoted: _0x5ed4e1
            });
          }
        }
        if (_0x5ed4e1.text.startsWith(">")) {
          if (!_0x503b7c) {
            return;
          }
          try {
            let _0x3194c6 = await eval(_0x5ef4a1);
            if (typeof _0x3194c6 !== "string") {
              _0x3194c6 = util.inspect(_0x3194c6);
            }
            _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              text: util.format(_0x3194c6)
            }, {
              quoted: _0x5ed4e1
            });
          } catch (_0x5c317f) {
            _0x10b5e5.sendMessage(_0x5ed4e1.chat, {
              text: util.format(_0x5c317f)
            }, {
              quoted: _0x5ed4e1
            });
          }
        }
    }
  } catch (_0x2e2448) {
    console.log(_0x2e2448);
    _0x10b5e5.sendMessage(owner + "@s.whatsapp.net", {
      text: "" + util.format(_0x2e2448)
    }, {
      quoted: _0x5ed4e1
    });
  }
};
process.on("uncaughtException", function (_0x1ed73c) {
  console.log("Caught exception: ", _0x1ed73c);
});
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold("" + __filename));
  delete require.cache[file];
  require(file);
});