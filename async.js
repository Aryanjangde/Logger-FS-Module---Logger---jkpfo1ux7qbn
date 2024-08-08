async function hello(){
    await fetch();
    console.log("hello");
    // return unefined
}

// without async await 

function hello(){
    return new Promise((res)=>{
        fetch().then(()=>{
            console.log("hello");a
            res()
        }) 
    })
}