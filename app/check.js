var MD5 = require('js-md5');
var convertHex = require('convert-hex');
var fs = require('fs');

function hash(plain) {
	return MD5(convertHex.hexToBytes(MD5(plain))).slice(0, 14)
}


console.log(hash("79fd67d181aab976"))
console.log(hash("f1918392e76ee966"))


console.log(hash("ebb4f439f4cf15"))
console.log(hash("c0139cb4a1fc60"))
