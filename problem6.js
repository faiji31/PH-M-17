/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentsalary =startingSalary;
for (var i=1; i<=experience;i++){
    currentsalary*=1.05;
}
console.log(currentsalary.toFixed(2));