function avg(numbers){
    let s=0;
    for(let i=0; i<numbers.length; i++){
        s+=numbers[i];
    }
    return s/numbers.length;
}

function prime(num){
    if(num === 2) {
        return true;
      }
      
      for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
          return false; 
        }
      }
      // 나눠진 수가 없다면 해당 수는 소수이므로 return true
      return true; 
    return false;
}
function fact(num){
    let j=1;
    for(let i=num; i>=1;i--){
        j*=i;
    }
    return j;
}
module.exports={
    avg,
    prime,
    fact
}