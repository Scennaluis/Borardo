let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*Ingrese un texto*'        
let res = `https://api.reysekha.xyz/api/textpro/water-color?text=${response[0]}&apikey=apirey`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)}
handler.command = /^(logocolor)$/i
module.exports = handler
