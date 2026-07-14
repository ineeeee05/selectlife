let currentRoute="";
let currentIndex=0;
let currentQuestion=null;
let selectedChoice=-1;
let autoEvent=null;

const screens={
start:document.getElementById("startScreen"),
select:document.getElementById("selectScreen"),
question:document.getElementById("questionScreen"),
result:document.getElementById("resultScreen"),
ending:document.getElementById("endingScreen")
};

const questionTitle=document.getElementById("questionTitle");
const questionText=document.getElementById("questionText");
const choiceArea=document.getElementById("choiceArea");

const progressText=document.getElementById("progressText");
const progressFill=document.getElementById("progressFill");

const resultText=document.getElementById("resultText");
const resultTitle=document.getElementById("resultTitle");

const endingTitle=document.getElementById("endingTitle");
const endingText=document.getElementById("endingText");

function showScreen(name){
    for(const key in screens){
        screens[key].classList.remove("active");
    }
    screens[name].classList.add("active");
}

function updateProgress(){
    const total=routeQuestions[currentRoute].length;
    progressText.textContent=`${currentIndex+1} / ${total}`;
    progressFill.style.width=`${((currentIndex+1)/total)*100}%`;
}

function startGame(route){
    currentRoute=route;
    currentIndex=0;
    loadQuestion();
}

document.getElementById("startBtn").addEventListener("click",()=>{
showScreen("select");
});

document.querySelectorAll(".routeBtn").forEach(button=>{
button.addEventListener("click",e=>{
const route=e.target.parentElement.dataset.route;
startGame(route);
});
});

function loadQuestion(){
        
    resultTitle.textContent="결과";
    const route=routeQuestions[currentRoute];
    const questionId=route[currentIndex];

    currentQuestion=questions[questionId];

    updateProgress();

    showScreen("question");

    questionTitle.textContent=currentQuestion.title;
    questionText.textContent=currentQuestion.text;

    choiceArea.innerHTML="";

    currentQuestion.choices.forEach((choice,index)=>{

    const btn=document.createElement("button");

    btn.className="choiceBtn";

    btn.textContent=choice;

    btn.onclick=()=>{

    selectedChoice=index;

    showResult();

};

choiceArea.appendChild(btn);

});

}

function showResult(){

    showScreen("result");

    resultTitle.textContent="결과";

    resultText.innerHTML=
    results[currentRoute][currentQuestion.id][selectedChoice]
    .replace(/\n/g,"<br>");

    if(currentRoute=="A"){

        if(currentQuestion.id=="examA"){
            autoEvent=autoEvents.A.afterExam;
        }

        else if(currentQuestion.id=="exchange"){
            autoEvent=autoEvents.A.afterExchange;
        }

        else{
            autoEvent=null;
        }

    }

    else{
        autoEvent=null;
    }

}

document.getElementById("nextBtn").addEventListener("click",()=>{

if(autoEvent!=null){

    resultTitle.textContent=autoEvent.title;

    resultText.innerHTML=
    autoEvent.text.replace(/\n/g,"<br>");

    autoEvent=null;

    return;

}

currentIndex++;

const total=routeQuestions[currentRoute].length;

if(currentIndex>=total){

    showEnding();

    return;

}

loadQuestion();

});

function showEnding(){

    showScreen("ending");

    endingTitle.textContent=
    endings[currentRoute].title;

    endingText.innerHTML=
    endings[currentRoute].text.replace(/\n/g,"<br>")+
    "<br><br><hr><br>"+
    endingMessage.replace(/\n/g,"<br>");
}

document.getElementById("restartBtn").addEventListener("click",()=>{

    currentRoute="";
    currentIndex=0;
    currentQuestion=null;
    selectedChoice=-1;
    autoEvent=null;

    showScreen("start");

});