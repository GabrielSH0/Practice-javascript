let answerDiv=document.querySelector(".answer"); 
let image=document.querySelector(".ball");
let body=document.querySelector("body");
let changeSize=document.querySelector(".changeSize");
let changeColor=document.querySelector(".changeColor"); 
let sayWeather=document.querySelector(".sayWeather");
let sayCity=document.querySelector(".sayCity");
let changeText=document.querySelector(".changeText");
let suggestLunch=document.querySelector(".suggestLunch");
let sayNumber=document.querySelector(".sayNumber");
let changePicture=document.querySelector(".changePicture");

sayWeather.onclick=function(){
    //Write the code for Code Along Part 1 below
    answerDiv.innerHTML="The weather is sunny";
};

sayCity.onclick=function(){
    //Write the code for Code It Solo Part 1 below
    answerDiv.innerHTML="I live in São Paulo";
};

changeSize.onclick=function(){
    //Write the code for Code Along Part 2 below!
    image.style.width="500px";
};

changeColor.onclick=function(){
    //Write the code for Code It Solo Part 2 below!
    body.style.backgroundColor="green";
};



// Problem 1
changeText.onclick=function(){
    //Write the code for Code It Solo Part 3 Problem 1 below
    body.style.color="blue";
};

//Problem 2
suggestLunch.onclick=function(){
    //Write the code for Code It Solo Part 3 Problem 2 below
    answerDiv.innerHTML="You should eat a sandwich for lunch";
};

//SPICY (Optional): Problem 3
sayNumber.onclick=function(){
 let secretNumber=document.querySelector("input").value; //this is saving the value of whatever the user types in as their secrete number
//Write the code for Spicy Problem 3 below
    answerDiv.innerHTML=secretNumber;
};

//SPICY (Optional): Problem 4
changePicture.onclick=function(){
    //Write the code for Spicy Problem 4 below. Remember to use .src!
    image.src="https://expertphotography.b-cdn.net/wp-content/uploads/2021/05/expart_photography_crystall_ball_blue_hour.jpg";
};

