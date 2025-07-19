/*Add your JavaScript here*/ 
var shounenScore = 0;
var shoujoScore = 0;

var numQuestion = 0;
var result = document.getElementById("result");
//storing Button elements into variables using DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1"); 
var q4a2 = document.getElementById("q4a2"); 

var q5a1 = document.getElementById("q5a1"); 
var q5a2 = document.getElementById("q5a2"); 

/*Question 1*/
q1a1.addEventListener("click", shounenAdd);
q1a2.addEventListener("click", shoujoAdd);
/*Quesion 2*/
q2a1.addEventListener("click", shoujoAdd);
q2a2.addEventListener("click", shounenAdd);
/*Question 3*/
q3a1.addEventListener("click", shounenAdd);
q3a2.addEventListener("click", shoujoAdd);
/*Question 4*/
q4a1.addEventListener("click", shoujoAdd);
q4a2.addEventListener("click", shounenAdd);
/*Question 5*/
q5a1.addEventListener("click", shoujoAdd);
q5a2.addEventListener("click", shounenAdd);

/*shounen function*/
function shounenAdd(){
  event.target.disabled = true;
  shounenScore +=1;
  numQuestion += 1;
  
  console.log("Question count = " + numQuestion + " shounenScore = " + shounenScore); 
  
  if (numQuestion == 5) {
    console.log("The quiz is done!")
    updateResult();
  } 
  
}

/*shoujo function*/
function shoujoAdd(){
  event.target.disabled = true;
  shoujoScore +=1;
  numQuestion += 1;
  
  console.log("Question count = " + numQuestion + " shoujoScore = " + shoujoScore); 
  
  if (numQuestion == 5) {
    console.log("The quiz is done!")
    updateResult();
  } 

}

function updateResult(){
  if (shounenScore > shoujoScore && shounenScore >=3){
    result.innerHTML = "You might like Hunter X Hunter, Jujutsu Kaisen, Fullmetal Alchemist: Brotherhood, and Code Geass!";
    console.log("You might like Shounen!");
  } else if (shounenScore < shoujoScore && shoujoScore >=3){
    result.innerHTML = "You might like Fruits Basket, Chihayafuru, Skip Beat!, and Kimi ni Todoke!";
    console.log("You might like Shoujo!");
  }
}

restart.addEventListener("click", restartQuiz)
function restartQuiz(){
  result.innerHTML = "Your Result Is...";
  numQuestion = 0;
  shounenScore = 0;
  shoujoScore = 0;
  
}
