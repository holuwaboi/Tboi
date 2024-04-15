//question answer array
var QuestionBank = [
    {
        question:'who is the CEO of Appclick ',
        options:['Osimhen','Seyi Adeleke','Seyi Law','stanley'],
        answer:'Abuja'

    },
    {
        question:'who is the president of nigeria ',
        options:['Obasanjo','thomas muller','Obasanjo','tinubu'],
        answer:'Abuja'


    },
    {
         question:'who is the capital of nigeria ',
         options:['lagos','oyo','benue','togo'],
         answer:'Abuja'
    }     
]

//dom connection
var question = document.querySelector('.question')
var option0 = document.querySelector('.option0')
var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var i = 0
var next = document.querySelector('.next')
var stat = document.querySelector('.stat')
var scoreBoard =document.getElementById('scoreboard')
var quizContainer = document.querySelector('.quiz-container')
var score= 0
var scorez = document.getElementById('score')
var span = document.querySelectorAll('span')
var answers = document.getElementById('Answers')
var timerElement = document.querySelector('.timerelement')
// console.log(QuestionBank[0].question)


//functions
function displayQuestion(){
    for(var b=0;b<span.length; b++){
        span[b].style.background='none'
    }

    question.innerHTML= 'Q.'+(i+1)+" " +QuestionBank[i].question
    option0.innerHTML= QuestionBank[i].options[0]
    option1.innerHTML= QuestionBank[i].options[1]
    option2.innerHTML= QuestionBank[i].options[2]
    option3.innerHTML= QuestionBank[i].options[3]
    

    stat.innerHTML=`question ${i+1} of  ${QuestionBank.length}`

}



//next function

function nextQuestion(){
    if(i < QuestionBank.length-1){
        i++
        displayQuestion()
    }
    else{
        
        quizContainer.style.display='none';
        scoreBoard.style.display ='block';
        scorez.innerHTML = score +"/" + QuestionBank.length
       
    }



}
 function CalculateScore(e){
    if(e.innerHTML === QuestionBank[i].answer && i < QuestionBank){
    score = score + 1;
    // console.log('correct answer')
    e.style.background='green'

    // document.querySelector(e.id).style.background=
    // console.log(score);
    }
    
    else{
        e.style.background= 'tomato'
        // score =score -1



    }
    setTimeout(nextQuestion,300)

}
 function backToQuiz(){
    location.reload()

}

for(var a = 0; a<QuestionBank.length; a++){
var list = document.createElement('li')
list.innerHTML = QuestionBank[a].answer
answers.appendChild(list)

}







next.addEventListener('click',nextQuestion)


function updateTime(){
const Time = new Date()
// .toLocaleDateString()


var sec = Time.getSeconds()
var minute = Time.getMinutes()
var Hours = Time.getHours()

timerElement.innerHTML= `${Hours} : ${minute} :${sec}`
}

updateTime()
setInterval(updateTime,1000);









displayQuestion()



var television = 'samsung'
console.log(typeof(television))


