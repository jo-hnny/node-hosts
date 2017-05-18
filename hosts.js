const fs = require('fs')
const https = require('https')
const wirteStream = fs.createWriteStream('C:/Windows/System32/drivers/etc/hosts')
https.get('https://coding.net/u/scaffrey/p/hosts/git/raw/master/hosts', res => res.pipe(wirteStream))