var fs = require('fs')
var path = require('path')
var mod = require('./program6Module')

fs.readdir(process.argv[2], mod)
