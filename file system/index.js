const { log } = require('console');
const fs=require('fs');

// Read File Synchronously
const content=fs.readFileSync('file1.txt','utf-8');

// Read File Asynchronously
fs.readFile('file1.txt','utf-8',(err,data)=>{
    console.log("Async Read Operation : "+data);
})


// Write File Synchronously
fs.writeFileSync('file2.txt',content);

// Write File Asynchronously
fs.writeFile('file2.txt',"Hello My Name is Rohit Sahu",()=>{
    console.log("Async Write Operation");
})

// Delete File file2.txt
fs.unlinkSync('file2.txt');

// Rename file1.txt to file3.txt
// fs.renameSync('file1.txt','file3.txt');

// Create Folder
fs.mkdirSync('folder1');
log("Folder Created");

// Create Nested Folder
fs.mkdirSync('folder1/folder2');
log("Folder Created");

// Delete Nested Folder
// fs.rmdirSync('folder1/folder2');
// log("Folder Deleted");

// Delete Folder
// fs.rmdirSync('folder1');
// log("Folder Deleted");

console.log(content);
