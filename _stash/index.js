var MD5 = require('js-md5');
var convertHex = require('convert-hex');
var fs = require('fs');

function hash(plain) {
	// return MD5(convertHex.hexToBytes(MD5(plain))).slice(0, 7)
	return MD5(convertHex.hexToBytes(MD5(plain))).slice(0, 8)
}

console.log('test hashing')
console.log(hash("79fd67d181aab976"));
console.log(hash("f1918392e76ee966"));

console.log(hash("fd137cb75f67ab1e62db24da963ea37b"))
console.log(hash('578c54ca77b147b99fdedfcb17c8cccd'))

// MD5 hex hash: akakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakaka
// e384ce86069b5300fa28aa5df60d0cc2
// e384ce86069b5300
//  console.log(hash('40c66634'))
// console.log(hash('cfc023ea'))

var hashes = []
var start_hash = "e384ce86069b5300";
hashes.push(start_hash)

while (1) {
	var current_hash = hash(hashes[hashes.length - 1]);
	if (hashes.indexOf(current_hash) === -1) {
		hashes.push(current_hash)
		// console.log(current_hash)
	} else {
		var prev_hash_to_search = hashes[hashes.length - 1];
		var id = hashes.indexOf(current_hash);
		var found_hash = hashes[id];
		var prev_hash = hashes[id-1];

		var final = "prev_hash_to_search: " + prev_hash_to_search + '\n'
		+ "current_hash " + current_hash + '\n'
		+ "id " + id + '\n'
		+ "found_hash " + found_hash + '\n'
		+ "prev_hash " + prev_hash + '\n'
		+ '----------------------------\n'
		+ "1: " + prev_hash_to_search + " | 2: " + prev_hash;

		findOut(final) 
		break;
	}
}

function findOut(value) {
	fs.writeFile("hashes.log", value, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});

}

