let handler = function (m) {
  this.sendContact(m.chat, '60164492583', 'Wan (Owner)', m)
  this.sendContact(m.chat, '0', 'WhatsApp', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler