/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
area =area/2;
console.log(area);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money>=45000){
    console.log("Buying Laptop");

}else if(money>=10000){
    console.log("Buying Cycle");
}else{
    console.log("Buying Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for (var i=1;i<=lastDay;i++){
    if (i%3===0){
        console.log(i +"medicine");
    }else{
        console.log(i +"rest");
    }
}