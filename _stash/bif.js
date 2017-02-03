var MD5 = require('js-md5');
var convertHex = require('convert-hex');
var fs = require('fs');

function hash(plain) {
	// return MD5(convertHex.hexToBytes(MD5(plain))).slice(0, 7)
	return MD5(convertHex.hexToBytes(MD5(plain))).slice(0,16)
}

var hashes = []
var start_hash = "e384ce86069b5300";
hashes.push(start_hash);
hashes.push(hash(hashes[0]));
hashes.push(hash(hashes[1]));

var current_id_tortoise = 1;
var current_id_hare = 2;
var tortoise = hashes[current_id_tortoise];
var hare = hashes[current_id_hare];


while (tortoise !== hare) {

	hashes.push(hash(hashes[current_id_hare]))
	hashes.push(hash(hashes[hashes.length-1]))
	// hashes.push(hash(hashes[hashes.length-1]))

	last_id_tortoise = current_id_tortoise;
	last_id_hare = current_id_hare;

	current_id_tortoise = current_id_tortoise + 1;
	current_id_hare = current_id_hare + 2;
	
	tortoise = hashes[current_id_tortoise]
	hare = hashes[current_id_hare]

	console.log(tortoise, current_id_tortoise)
	console.log(hare, current_id_hare)
	console.log('--')


}

// while (1) {

// 	if (tortoise === hare) {
// 		var final = "last_tortoise " + last_tortoise + " | last_hare " + last_hare;
// 		console.log('============')
// 		console.log(hashes[current_id_tortoise-1])
// 		console.log(hashes[current_id_hare-1])		


// 		console.log("==============")
// 		findOut(final)
// 		break;
// 	} else {
// 		if (tortoise !== hare) {
// 			var last_tortoise = tortoise;
// 			var last_hare = hare;
// 		}

// 		var next_current_hare = hash(hare);
// 		hashes.push(next_current_hare);
// 		var next_current_hare = hash(hashes[hashes.length-1])
// 		hashes.push(next_current_hare);

// 		tortoise = hashes[current_id_tortoise]
// 		hare = hashes[current_id_hare]
// 		current_id_tortoise = current_id_tortoise +1;
// 		current_id_hare = current_id_hare + 2;
// 	}
// }

function findOut(value) {
	fs.writeFile("hashes.log", value, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});

}


