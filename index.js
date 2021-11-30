// exercise 1
var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log("My name is "+ userName);

// exercise 2 to 6
// var score = 1;
// var age = readlineSync.question("Is your age greater than 25 ? ");
// if(age=='yes'){
//   console.log("You are right!")
// score = score+1;
// }else{
//   console.log("You are wrong!")
// }
// exercise 7
// function add(num1,num2){
//   var sum = num1+num2;
//   return sum;
// }
// add(3,5);
// exercise 8
// function checkAns(questionone,ans){
//   var userans = readlineSync.question(questionone);
//   if(userans == ans){
//     console.log("Your answer is correct!");
//   }else{
//     console.log("Your answer is wrong")
//   }
// }
// checkAns("Whats your Name ?","Atharva");

// exercise 9
// for(var i=0;i<5;i++){
//   console.log("ASB",i);
// }
// exercise 10
// for(var i=1;i<5;i++){
//   for(var j =1;j<=i;j++){
//     console.log("*");
//   }
// }
// exercise 10
// var grocery = ["fruits","vegetables","milk","biscuits","bread"];
// console.log(grocery[0]);
// console.log(grocery[2]);
// console.log(grocery[grocery.length-1]);
// for(var i=0;i<grocery.length;i++){
//   console.log(grocery[i]);
// }

// var superman ={
//   name : "Superman",
//   power : "flight",
//   strength:100
// }
// var batman = {
//   name : "Batman",
//   power : "fight",
//   strength:1000
// }
// var superhero = [superman,batman];
// for(var i =0;i<superhero.length;i++){
//   var hero = superhero[i];
//   console.log(hero.name);
// }
// console.log(superman.name);
console.log("Lets play a game ");
console.log("**************************************");

console.log("Lets Play!! How well do you know me? ");
console.log("");
var user = readlineSync.question("What is your name ? ");
console.log("");
var highScore = {
  name:"Atharva",
  score:5
}
questionOne = {
  question: "Who is Atharva's favorite superhero?",
  answer: "Superman"
}

questionTwo = {
  question: "Who is Atharva's favorite Cricketer?",
  answer: "Virat Kohli"
}
questionThree = {
  question: "What is Atharva's favourite food?",
  answer: "Pizza"
}
questionFour = {
  question: "What is Atharva's favorite travel destination?",
  answer: "Norway"
}
questionFive = {
  question: "Who is Atharva's Mentor?",
  answer: "Tanay Pratap"
}
var score = 0;
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i = 0;i<questions.length;i++){
  var userans = readlineSync.question(questions[i].question);
  if(userans.toUpperCase() == questions[i].answer.toUpperCase()){
    console.log("You are right!!");
    console.log("");
    score++;
    
  }else{
    console.log("Sorry ,You are wrong !!!");
    console.log("");
  }
}
console.log("**************************************");
console.log(user +" your score is "+ score);
console.log("**************************************");
console.log("Highest Scorer is ",highScore.name)
