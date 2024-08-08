const fs = require('fs');
function generateRandom(){
    return `${Math.random().toFixed(2) * 100}`
}
function BuildData(n){
    for(let i =0; i<n; i++){
        fs.writeFile(`${i}_ans.txt`, generateContent(i), (err)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(`File ${i} done`)
        })
    }
}

function generateContent(n){
    let content = "";
    for(let i=0; i<n; i++){
        content += generateRandom() + "\n";
    }
    console.log(content)
    return content
}

BuildData(100);

