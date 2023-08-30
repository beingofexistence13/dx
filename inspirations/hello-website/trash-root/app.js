  //requiring path and fs modules
const path = require('path');
const fs = require('fs');

let fileDataArray = [];
let op1 = [],op2 = [];
    
  fs.readdirSync("./icons/", "utf8").forEach((file) => {
   op1.push(`"${file}"`);
   op2.push(file);
     fileDataArray.push(`{"${fs.readFileSync("./icons/" + file, "utf8")}"}`);
//   console.log(file)
  });


// fs.writeFile('icons1o1.js',`let filterArray = [${op1}] \n let fileDataArray = [${fileDataArray}]; \n  let [${op2}]= fileDataArray; \n console.log("The Files Names length are ${op2.length} And Files Data Length are ${fileDataArray.length}");`,(err)=>{
  // if(err) console.log(err);
 // console.log("Yesss")
// })




fs.writeFile('icons1o1.html',` \n let fileDataArray = [${fileDataArray}]; \n  let [${op2}]= fileDataArray; \n console.log("The Files Names length are ${op2.length} And Files Data Length are ${fileDataArray.length}");`,(err)=>{
  if(err) console.log(err);
  console.log("Yesss")
})

 console.log(`The Files Names are ${op1.length} And Files Data are ${fileDataArray.length}`)
 