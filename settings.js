require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283139887149"
global.namaowner = "Zero Cloud Host ⚡"

//======== Setting Bot & Link ========//
global.namabot = "ZeroBot" 
global.namabot2 = "ZeroBotz"
global.foother = "© Copyright Zero Cloud Host - 2024"
global.idsaluran = "belum tersedia"
global.linkgc = 'https://chat.whatsapp.com/ECrsnoYgev65WFpFeX7JXJ'
global.linksaluran = "belum tersedia"
global.linkyt = 'https://www.youtube.com/'
global.linktele = "https://t.me/zerocloudhosting"
global.packname = "Created By zeroes host"
global.author = "Zero Cloud Host"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 10000
global.delayjpm = 3000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://serverpanelzeroes.ynmxz.my.id"
global.apikey = "ptla_ZgUOoWfvIAj5ww3Zx7WIMRpbDNsKVlTKKfJ6T47NoQA"
global.capikey = "ptlc_tMM99EOvtSct5bBBkpG0koYeFFIoP9xdycIfjefh4Si"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "Minta owner"
global.gopay = "-"
global.ovo = "-"
global.seabank = ""
global.pulsa = "-"
global.qris = fs.readFileSync("./media/qris.jpeg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang damzz ☕✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin kek bang damzz 😎☕", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})