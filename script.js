const extendHex = (shortHex) => {
  // write your code here
	const hexWithoutHash = shortHex.startsWith('#') ? shortHex.slice(1) : shortHex;

    // Double each character to get the full hex code
    const fullHex = hexWithoutHash
        .split('')
        .map(char => char + char)
        .join('');

    // Add the # prefix to the full hex code
    return '#' + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
