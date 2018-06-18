var fs = require('fs');
fs.writeFile("emo.txt", "Hello World", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
