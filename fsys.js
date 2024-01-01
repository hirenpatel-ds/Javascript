// const fs = require('fs');
// const { fileURLToPath } = require('url');
// fs.readFile('myFile.txt','utf8',function(err,data){
//     console.log(err)
//     console.log(data)
// })

// const fr = fs.readFileSync('myFile.txt');
// console.log(fr.toString());
// console.log("File reading completed");

// Write file

// fs.writeFile('a.txt',"This is a new data that will be inserted in to file",function(){
//     console.log("Written completed");
// })

// const fw = fs.writeFileSync('a.txt',"This is my second data");
// console.log(fw);
import * as fs from 'fs';
fs.readFile('a.txt','utf-8',function(err,data){
    return data
})
const d1 = data
function concateNewString(d1){
    console.log(d1);
}
concateNewString(d1);