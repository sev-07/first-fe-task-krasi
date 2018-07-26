var fs = require('fs');
fs.writeFile("emo.txt", "Hello World", function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});

fs.readFile("emo.txt", function(err1, contents) {
  if(err1) {
      return console.log(err1);
  }

  console.log("The saved file contains the following string: " + "\"" + contents + "\".");
});
