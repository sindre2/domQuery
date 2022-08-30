//Consts for "getElementById". It selects the DOM elements and stores them in variables.
const theDiv = document.getElementById("manipulate");
const shakeBtn = document.getElementById("shake-btn");
const spinBtn = document.getElementById("spin-btn");
const flyBtn = document.getElementById("fly-btn");
const bearBtn = document.getElementById("bear-btn");
const bearPic = document.getElementById("bear-pic");

//An audio constructor is created for the variable "bearNoise". That way, the mp3-file can be manipulated by javascript in an object.
const bearNoise = new Audio("./sounds/daaw.mp3");


//Event listeners for each of the interactble elements in the DOM. They will play the respective functions on "click".
shakeBtn.addEventListener("click", shake);
spinBtn.addEventListener("click", spin);
flyBtn.addEventListener("click", fly);
bearBtn.addEventListener("click",bear);


/* Each function adds a class to the div-element. The class added, will play an animation.
Then "setTimeout" will run after a set delay and remove the added class. */
function shake()
{
    theDiv.classList.add("shake");
    setTimeout(()=>
    {
        theDiv.classList.remove("shake"); 
    }, 700);
};

function spin()
{
    theDiv.classList.add("spin");
    setTimeout(()=>
    {
        theDiv.classList.remove("spin"); 
    }, 500);
};

function fly()
{
    theDiv.classList.add("fly");
    setTimeout(()=>
    {
        theDiv.classList.remove("fly"); 
    }, 500);
};


/* This is the only special function as it adds a class to the bear image. It also plays a sound from the "bearNoise" audio-object.
"setTimeout()" works the same way here as previously. */
function bear()
{
    bearPic.classList.add("bear");
    bearNoise.play();
    setTimeout(()=>
    {
        bearPic.classList.remove("bear"); 
    }, 600);
};