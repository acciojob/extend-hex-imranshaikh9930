const extendHex = (shortHex) => {
  // write your code here
	// const hexWithoutHash = shortHex.startsWith('#') ? shortHex.slice(1) : shortHex;

 //    // Double each character to get the full hex code
 //    const fullHex = hexWithoutHash
 //        .split('')
 //        .map(char => char + char)
 //        .join('');

 //    // Add the # prefix to the full hex code
 //    return '#' + fullHex;
		let arr =[];
		for(let i = 0 ; i< shortHex.length;i++){
		  if(shortHex[i] === '#'){
		    arr.push(shortHex.slice(i+1));
		  }
		}
		let withOutHex = ""
		arr.forEach(element => {
		
		 withOutHex = element.split("").map(char=>char+char).join("");
		  
		});
		
		return '#'+withOutHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
