var score = 0
var questContainer = document.getElementsByClassName('ques')
var button = document.getElementById('start')

button.addEventListener('click', trivia)


function trivia () {
    var questions = [
        'Who was the first president of the United States?',
        'What country has the largest population in the world?',
        'What year did the first IPhone come out?',
        'DMV which consists of 3 connected states (NOT DEPARTMENT OF MOTOR VEHICLES SILLY) stands for...',
        'Who was the first computer programmer'
    ]

    var answers = [
        'George Washington',
        'China',
        '2007',
        'DC/Maryland/Virginia',
        'Ada Lovelace'
    ]

    for(var i = 0; i < questions.length; i++){
        questContainer[i].innerHTML = questions[i]
     var appending = document.createElement('input')
        questContainer[i].appendChild(appending)
        var answer = document.createElement('button')
        answer.setAttribute('class','button')
        questContainer[i].appendChild(answer)
    }

    var input = document.getElementsByTagName('input')

function checkAnswers1() {
    if(input[0].value === answers[0]){
        score ++
        alert('YAY CORRECT')
    } 
    else{
        alert('Wrong! Try Again!')
    }  
}

function checkAnswers2(){
    if(input[1].value === answers[1]){
        score++
        alert('YAY Correct Again')
    }
    else{
        alert('Wrong! Try Again!')
    }    
}

function checkAnswers3(){
    if(input[2].value === answers[2]){
        score++
        alert('Great Keep it Going')
    }
    else{ // correct way
        alert('Wrong! Try Again!')
    }  
}

function checkAnswers4() {
    if(input[3].value === answers[3]){
        score++
        alert('Great one more question')
    }
    else{
        alert('Wrong! Try Again!')
    }  
}

function checkAnswers5() {
    if(input[4].value === answers[4]){
        score++
        alert('Great Correct')
    }
    else{
        alert('Wrong! Try Again!')
    }  
}

var enterButtons = document.querySelectorAll('.button')

enterButtons[0].addEventListener('click', checkAnswers1) // I did not practice DRY here 
enterButtons[1].addEventListener('click', checkAnswers2) //Sorry
enterButtons[2].addEventListener('click', checkAnswers3)
enterButtons[3].addEventListener('click', checkAnswers4)
enterButtons[4].addEventListener('click', checkAnswers5)
   
}
    

//command backslash
// 

// var score = 0
// alert('Welcome to the Knowledge Trivia')
// var q1 = prompt('Who was the first president of the United States?')
// // var q1 = 'Who was the first president of the United States?'
// // step 2: select the element from step 1
//     // use document.getElementById like you did above
// // step 3: put the text for the question in the element 
// // using .innerHTML = q1 or q2 or whatever var is storing your question  
// if (q1 === 'George Washington') {
//     score++
//     alert('You are correct. Your score is ' + score)
// }
// else {var q1 = prompt('Who was the first president of the United States?')

//     alert('Sorry wrong answer. Your score is ' + score)
// }

// var q2 = prompt('What country has the largest population in the world?')
// score++
// if (q2 === 'China') {
//     alert('you are correct. Your score is ' + score)
// }
// else {
//     alert('Sorry wrong answer. Your score is ' + score)
// }

// var q3 = prompt('What year did the first Iphone come out?')
// if (q3 === 2007) {
//     score++
//     alert('You are correct. Your score is ' + score)
// }
// else {
//     alert('Sorry, wrong answer. Your score is ' + score)
// }

// var q4 = prompt('DMV which consists of 3 connected states (NOT DEPARTMENT OF MOTOR VEHICLES SILLY) stands for...')
// if (q4 === 'DC/Maryland/Virginia') {
//     score++
//     alert('You are correct. your score is ' + score)
// }
// else {
//     alert('Sorry, wrong answer. Your score is ' + score)
// }
// var q5 = prompt('Who was the first computer programmer')
// if (q5 === 'Ada Lovelace') {
//     score++
//     alert('You are correct. your score is ' + score)
// }

// if (score === 5) {
//     alert('Your final score is ' + score + 'Congrats!')
// }
// else if (score === 4) {
//     alert('Youre score is ' + score + ' At least you only missed one')
// }

// else if (score < 4) {
//     alert('Try again to try and get a perfect score!')
// }



// /*referenced from a youtube video https://www.youtube.com/watch?v=bfS5-TEoa84*/




//     /*  <section class="quiz"> 
//         <h3>Who was the first president of the United States</h3>
//             <ul class = 'q1'>
//                 <li><input type="radio" name="people" value="George Lopez" class = 'gl'>George Lopez</li>
//                 <li><input type="radio" name="people" value="George Bush" class = 'gb'>George Bush</li>
//                 <li><input type="radio" name="people" value="George Washington" class = 'gw'>George Washington</li>
//             </ul>
//         <h3>What country has the largest population in the world?</h3>
//             <ul class = 'q2'>
//                 <li><input type="radio" name="country" value="India">India</li>
//                 <li><input type="radio" name="country" value="China">China</li>
//                 <li><input type="radio" name="country" value="Canada">Canada</li>
//             </ul>

//         <h3>What year did the first Iphone come out?</h3>
//             <ul class = 'q3'>
//                 <li><input type="radio" name="year" value="2007">2007</li>
//                 <li><input type="radio" name="year" value="1967">1967</li>
//                 <li><input type="radio" name="year" value="2000">2000</li>
//             </ul>
//         <h3>DMV which consists of 3 connected states (NOT DEPARTMENT OF MOTOR VEHICLES SILLY) stands for...</h3>
//         <ul class = 'q4'>
//             <li><input type="radio" name="states" value="DMV">DC, Maryland and Virginia</li>
//             <li><input type="radio" name="states" value="DMV">Delaware, Montana and Vermont</li>
//             <li><input type="radio" name="states" value="DMV">Denmark, Michigan and Virgin Islands</li>
//         </ul>

//         <h3 class = 'q5'>Who was the first computer programmer?</h3>
//             <ul>
//                 <li><input type="radio" name="program" value="Steve">Steve Jobs</li>
//                 <li><input type="radio" name="program" value="Ada">Ada Lovelace</li>
//                 <li><input type="radio" name="program" value="Gaga">Lady Gaga</li>
//             </ul>
//     </section>*/
