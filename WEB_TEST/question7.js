function convertCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        // Check if the character is upper case
        if (char === char.toUpperCase()) {
            result += char.toLowerCase(); // Convert upper case to lower case
        } else {
            result += char.toUpperCase(); // Convert lower case to upper case
        }
    }
    return result;
}

// Example usage:
var input = "hEILo";
var convertedString = convertCase(input);
console.log(convertedString); // Output: "HeLIO"
