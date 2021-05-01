const deploy = require("./deploy");
const bridge = require("./bridge")
const admin = require("./admin")
const erc20 = require("./erc20");
const erc20NativeSwap = require('./erc20NativeSwap')
const erc721 = require("./erc721");
const centrifuge = require("./centrifuge");

module.exports = {
    deploy,
    bridge,
    admin,
    erc20,
    erc20NativeSwap,
    erc721,
    centrifuge,
}
