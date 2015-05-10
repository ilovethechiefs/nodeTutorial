var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(dir, function finishedReading(error, dirList) {
  if (error) return console.error(error)

	for (var i = 0; i < dirList.length; i++) {
		if(path.extname(dirList[i]) == extension){
			console.log(dirList[i])
		}
	}
})
