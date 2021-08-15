function base(data){
    console.log("Data from callback :"+data)
}

function callBack(data){
    data("this is callback")
}

callBack(base)