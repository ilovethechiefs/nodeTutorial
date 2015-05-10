
// var fs = require('fs')
// var str = undefined
//
// function readStr(callback) {
//   fs.readFile(process.argv[2], function doneReading(err, fileContents) {
// 		if (err) throw err;
// 		str = fileContents.toString()
//     callback()
//   })
// }
//
// function logStr() {
// 	var total = str.split('\n').length - 1
// 	console.log(total)
// }
//
// readStr(logStr)

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
	// fs.readFile(file, 'utf8', callback) can also be used
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})
