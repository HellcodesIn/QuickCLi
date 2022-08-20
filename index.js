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
exports.deleter = deleter;
exports.deleterFolder = deleterFolder;

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
//"created" prompt
function created(){
    console.log(`file created successfully at ${process.cwd()}/${location}`);
}




//Hyper text markup language
function createHTML() {
    fs.writeFileSync(`${process.cwd()}/${location}`, html, created());
}

//javascript
function createjs() {
    fs.writeFileSync(`${process.cwd()}/${location}`, js, created());
}



//java
function createjava() {
    fs.writeFileSync(`${process.cwd()}/${location}`, java, created());
}



//python
function createpy() {
    fs.writeFileSync(`${process.cwd()}/${location}`, python, created());
}



//C++
function createcpp() {
    fs.writeFileSync(`${process.cwd()}/${location}`, cpp, created());
}



//web bundle
function webB() {
    fs.mkdirSync(`${process.cwd()}/${location}`);
    fs.writeFileSync(`${process.cwd()}/${location}/index.html`, htmlBind);
    fs.writeFileSync(`${process.cwd()}/${location}/main.js`, js);
    fs.writeFileSync(`${process.cwd()}/${location}/style.css`, css);
}





//Delete files/Folders

//files
function deleter(){
    fs.unlink(`${process.cwd()}/${location}`, ()=> {
        console.log(`file deleted at ${process.cwd()}/${location}`);
    })
}

//folders
function deleterFolder(){
    fs.rmdir(`${process.cwd()}/${location}`, ()=> {
        console.log(`folder deleted at ${process.cwd()}/${location}`);
    });
}

//deleterFolder()
