function reverseHash(data) {
	var letters = "acdegilmnoprstuw";
	var input = parseInt(data);
	var output = "";
	while (input > 7) {
		for(i=0;i<letters.length;i++) {
			var tmp = (input-i)/37;
			if(isInt(tmp)) {
				input = tmp;
				output += letters[i];
				break;
			}
		}
	} 
	return reverseString(output);
}
var isInt = function(n) { return parseInt(n) === n };
var reverseString = function(str) { return str.split("").reverse().join(""); }

console.log(reverseHash(930846109532517));