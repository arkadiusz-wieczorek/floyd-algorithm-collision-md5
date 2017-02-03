var MD5 = require('js-md5');
var convertHex = require('convert-hex');
var fs = require('fs');

function hash(plain) {
	return MD5(convertHex.hexToBytes(MD5(plain))).slice(0, 14)
}

function floyd(hash, x0, callback) {
	var tortoise = hash(x0);
	var hare = hash(hash(x0));
	
	var counter = 0;
	var final = "";

	console.log('first phase')

	while (tortoise != hare) {
		tortoise = hash(tortoise);
		hare = hash(hash(hare));
	
		counter += 1;
		if(counter % 100000 == 0){
			console.log(counter)
		}
	}

	tortoise = x0;

	console.log('second phase');
	counter = 0;

	while (tortoise != hare) {
		var temp_tortoise;
		var temp_hare;
		tortoise = hash(tortoise);
		hare = hash(hare);

		counter += 1;
		if(counter % 100000 == 0){
			console.log(counter)
		}
		if (tortoise !== hare) {
			temp_tortoise = tortoise;
			temp_hare = hare;

		} else {
			console.log("found hashes")
			final = "tortoise: "+ temp_tortoise + "\n" + "hare: " + temp_hare + "\n"
			console.log(final)
			console.log("checking calculations...")
			console.log("tortoise: "+temp_tortoise+ " → " + hash(temp_tortoise))
			console.log("hare: "+temp_hare+ " → " + hash(temp_hare) + "\n")

			break;
		}
	}
	callback(final)
}

function findOut(value) {
	fs.writeFile("hashes.log", value, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});
}

floyd(hash, "49aa66843380c377e93b198b966eb699", findOut)

