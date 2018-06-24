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

  for (var i = 0; i < questions.length; i++) { // looped through each question
    questContainer[i].innerHTML = questions[i]
    var appending = document.createElement('input')// created an input to put in the text
    questContainer[i].appendChild(appending)// appended the input
    var answer = document.createElement('button')
    answer.setAttribute('class', 'button') // created a class of button
    questContainer[i].appendChild(answer)
  }

  var input = document.getElementsByTagName('input')

  function checkAnswers1 () {
    if (input[0].value === answers[0]) { // had to change from answers[0] to input.value
      score++                       // because it wasnt registering.
      alert('YAY CORRECT')
    } else {
      alert('Wrong! Try Again!')
    }
  }

  function checkAnswers2 () {
    if (input[1].value === answers[1]) {
      score++
      alert('YAY Correct Again')
    } else {
      alert('Wrong! Try Again!')
    }
  }

  function checkAnswers3 () {
    if (input[2].value === answers[2]) {
      score++
      alert('Great Keep it Going')
    } else { // correct way
      alert('Wrong! Try Again!')
    }
  }

  function checkAnswers4 () {
    if (input[3].value === answers[3]) {
      score++
      alert('Great one more question')
    } else {
      alert('Wrong! Try Again!')
    }
  }

  function checkAnswers5 () {
    if (input[4].value === answers[4]) {
      score++
      alert('Great Correct')
    } else {
      alert('Wrong! Try Again!')
    }
  }

  var enterButtons = document.querySelectorAll('.button')

  enterButtons[0].addEventListener('click', checkAnswers1) // I did not practice DRY here
  enterButtons[1].addEventListener('click', checkAnswers2) // Sorry
  enterButtons[2].addEventListener('click', checkAnswers3)
  enterButtons[3].addEventListener('click', checkAnswers4)
  enterButtons[4].addEventListener('click', checkAnswers5)
}
