// Require the File System module, a built-in Node module
var fs = require('fs');
var file = '';

function convert() {
  // Check the arguments array
  if (process.argv.length > 2) {

    // Retrieve the second argument in the array
    file = process.argv[2];

    // Checks to see if the file exists
    if(fs.existsSync(file)) {
      // Retrieves the content of that file
      var content = fs.readFileSync(file, 'utf8');

      // Create a native JavaScript Object
      content = JSON.parse(content);

      // Writes out the file, and replaces it if it already exists
      // Minfiy Object and spit it out
      fs.writeFileSync(file, JSON.stringify(content));
      console.log("Done");
    } else {
      console.log("File does not exist - " + file);
    }  
  }
}

exports.convert = convert;