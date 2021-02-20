let handler = function (m) {
  // this.sendContact(m.chat, '6283144574743', 'Maha', m)
  this.sendContact(m.chat, '6283144574743', 'Maha', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
