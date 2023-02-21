#!/user/bin/env node

rosterFolder = "./rosters/";

var fs = require('fs');
var path = require('path');
const { JSDOM } = require('jsdom');
var files = fs.readdirSync(rosterFolder);

let rosterList = [];

function processFile( file ){
  const jsdom = require("jsdom");
  const htmlDoc = new JSDOM( fs.readFileSync("./rosters/"+file, 'utf8') ).window.document;
  var str = htmlDoc.querySelectorAll("table.table[summary='Procedure Report: Detailed and/or summarized report']");

//  str = htmlDoc.getElementsByClassName("table");

  for( let i = 0; i<str.length; i = i + 1){
    var table = str.item(i);
    for( let j=0; j<table.rows.length; j = j + 2){
      for(let col=0;col<table.rows[j].cells.length;col = col + 1){
        firstName = table.rows[j].cells[col].innerHTML.trim();
        lastName = (table.rows[j+1].cells[col].innerHTML).replace( /(<([^>]+)>)/ig, '').trim();
        image = table.rows[j+1].cells[col].querySelectorAll("img").item(0).getAttribute("src").trim().split('/').pop();
        image = rosterFolder+path.basename(file,".html")+"_files/"+image;
        if (firstName !== "&nbsp;"){
//          console.log(firstName,' ',lastName,' ',image);
          var obj={};
          obj.courseAndTerm = path.basename(file,".html").split("-")[0]+"-"+path.basename(file,".html").split("-")[1];
          obj.firstName = firstName;
          obj.lastName = lastName;
          obj.imageFileName = image;
          rosterList.push(obj);
        }
      }
    }
  }
}

files.forEach(function(file,idx){
  if(file.indexOf('html')>-1){
    processFile(file);
  }
});

listOfCourses = {};
rosterArray = {};
rosterList.forEach(function(obj){ listOfCourses[obj.courseAndTerm] = obj.courseAndTerm});
for( key in listOfCourses){
//  console.log(key);
  const x = rosterList.filter(obj => obj.courseAndTerm===key );
  rosterArray[key] = x;
};
//console.log(rosterArray);
console.log(JSON.stringify(rosterArray));
