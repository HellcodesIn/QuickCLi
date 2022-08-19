//external modules

const fs = require('fs');
const path = require('path');

//export ing functions
exports.createHTML = createHTML;
exports.createjs = createjs;
exports.createjava = createjava;
exports.createpy = createpy;
exports.createcpp = createcpp;
exports.webB = webB;

//location
const location = process.argv[2];

//File Creation

//code example created
let html = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>

<body>
    <p>Believe in yourself</p>
</body>

</html>

    `
let htmlBind = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>HTML</title>
  
  

  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <p>Believe in yourself</p>
  <!-- Do what you want -->
  <script src="main.js"></script>
</body>
</html>
`
let js = `
console.log("Hello, fellow!");
//Your Code:-
    `
let java = `
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, fellow!"); 
        //your code
    }
}
    `
let python = `
print('Hello, fellow!')
#Your code
    `
let cpp = `#include <iostream>

int main() {
    std::cout << "Hello, Fellow!";
    return 0;
}
    `
let css = `
body {
    /*Your choice*/
}

`




//Hyper text markup language
function createHTML() {
    fs.writeFileSync(`${process.cwd()}/${location}`, html);
    console.log(`file created successfully at ${process.cwd()}/${location}`)
}

//javascript
function createjs() {
    fs.writeFileSync(`${process.cwd()}/${location}`, js);
}



//java
function createjava() {
    fs.writeFileSync(`${process.cwd()}/${location}`, java);
}



//python
function createpy() {
    fs.writeFileSync(`${process.cwd()}/${location}`, python);
}



//C++
function createcpp() {
    fs.writeFileSync(`${process.cwd()}/${location}`, cpp);
}



//web bundle
function webB() {
    fs.mkdirSync(`${process.cwd()}/${location}`);
    fs.writeFileSync(`${process.cwd()}/${location}/index.html`, htmlBind);
    fs.writeFileSync(`${process.cwd()}/${location}/main.js`, js);
    fs.writeFileSync(`${process.cwd()}/${location}/style.css`, css);
}





//
