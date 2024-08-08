const fs = require('fs');
function generateRandom(){
    return Math.random().toFixed(2) * 100
}
function BuildData(n){
    for(let i =0; i<n; i++){
        fs.writeFile(`${i}_ans.txt`, generateRandom())
    }
}

BuildData(10);
