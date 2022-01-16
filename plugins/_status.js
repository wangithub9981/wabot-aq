let handler = m => m

handler.before = async function (m) {
let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime}`).catch(e => e)
 return !0
}

module.exports = handler


function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}