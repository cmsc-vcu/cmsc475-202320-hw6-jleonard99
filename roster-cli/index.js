#!/user/bin/env node

var fs = require('fs');
const { JSDOM } = require('jsdom');
var files = fs.readdirSync('./rosters/');

function processFile( file ){
    console.log(file)
    const jsdom = require("jsdom");
    const htmlDoc = new JSDOM( fs.readFileSync("./rosters/"+file, 'utf8') ).window.document;
    var str = htmlDoc.querySelectorAll("tr");

    for( )
    str.forEach( function( node ){
        if (node.cells.item(0).classList.contains("data") && node.cells.item(0).classList.contains("l")){

            for(let i=0; i<node.cells.length; i++ )

            console.log(node.innerHTML);
        }
    })

    
//    console.log(htmlDoc);
}

files.forEach(function(file,idx){
  if(file.indexOf('html')>-1){
    processFile(file);
  }
});
