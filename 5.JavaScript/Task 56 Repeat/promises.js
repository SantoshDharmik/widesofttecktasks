function division(n,d){
    return n/d
}

try{
    let result = division(1,0)
    if(result == Infinity){
        throw({reason:"denominator is 0", solution : "increement denominator by 1"})
    }
    console.log(result)
}catch(e){
    console.log("got an exception while dividing : " , e)
}



function division(n,d){
    return n/d
}

try{
    let result = division(1,0)
    if(result == Infinity){
        throw({reason:"denominator is 0", solution : "increement denominator by 1"})
    }
    console.log(result)
}catch(e){
    console.log("got an exception while dividing : " , e)
}