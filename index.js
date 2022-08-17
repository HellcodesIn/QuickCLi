const fs = require('fs');

exports.createHTML = createHTML;
exports.createjs = createjs;
const location = process.argv[2];

function createHTML() {
    let html = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>

<body>

</body>

</html>

    `
    fs.writeFileSync(`${process.cwd()}/${location}`, html);
}

function createjs(){
    let js = `
    console.log("Hello, fellow!");
    //Your Code:-
    `
    fs.writeFileSync(`${process.cwd()}/${location}`, js);
}

createHTML()
createjs()
