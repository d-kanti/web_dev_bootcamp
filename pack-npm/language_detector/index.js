const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

text = process.argv.slice(2).toString();


function gcl(text){
    try {
        return franc.all(text,{minLength:3})
    }catch(err){
        console.log(err)
    }
}


function tln(ar){
    n = 0
    for(let i = 0; i<5; i++){
        try{
            if(ar.length>2){

                return "The thing is: ".green+" ".bgGreen+langs.where("3",ar[i][0]).name.black.bgGreen+" ".bgGreen;
            } else{

                return "Sample too Small!!".bgRed.black
            }
        }catch{
            console.log("trying....".yellow);
        }
    }
}


// console.log(gcl(text))
console.log("\n\n", tln(gcl(text)));
