const os = require('os')

module.exports = function getHost() {
    const isIPv4 = family => family === 'IPv4'
    const isLocal = address => /^(192|172)\./.test(address)
    const find = ({ family, address }) => isIPv4(family) && isLocal(address)
    const { address } = Object.entries(os.networkInterfaces()).map(([_, data]) => data).flat().find(find)
    return address
}
