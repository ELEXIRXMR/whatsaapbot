let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • DANA [6288219149952]
│ • PULSA [6288219149952]
│ • PAYPAL [ikadekmahagangga]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
