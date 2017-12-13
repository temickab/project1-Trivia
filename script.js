
var button = document.getElementById('start')
button.addEventListener('click', function () {
    console.log('hello world')
})

var score = 0
alert('Welcome to the Knowledge Trivia')
var q1 = prompt('Who was the first president of the United States?')
// var q1 = 'Who was the first president of the United States?'
if (q1 === 'George Washington') {
    score++
    alert('You are correct. Your score is ' + score)
}
else {
    alert('Sorry wrong answer. Your score is ' + score)
}

var q2 = prompt('What country has the largest population in the world?')
score++
if (q2 === 'China') {
    alert('you are correct. Your score is ' + score)
}
else {
    alert('Sorry wrong answer. Your score is ' + score)
}

var q3 = prompt('What year did the first Iphone come out?')
if (q3 === 2007) {
    score++
    alert('You are correct. Your score is ' + score)
}
else {
    alert('Sorry, wrong answer. Your score is ' + score)
}

var q4 = prompt('DMV which consists of 3 connected states (NOT DEPARTMENT OF MOTOR VEHICLES SILLY) stands for...')
if (q4 === 'DC/Maryland/Virginia') {
    score++
    alert('You are correct. your score is ' + score)
}
else {
    alert('Sorry, wrong answer. Your score is ' + score)
}
var q5 = prompt('Who was the first computer programmer')
if (q5 === 'Ada Lovelace') {
    score++
    alert('You are correct. your score is ' + score)
}

if (score === 5) {
    alert('Your final score is ' + score + 'Congrats!')
}
else if (score === 4) {
    alert('Youre score is ' + score + ' At least you only missed one')
}

else if (score < 4) {
    alert('Try again to try and get a perfect score!')
}



/*referenced from a youtube video https://www.youtube.com/watch?v=bfS5-TEoa84*/




    /*  <section class="quiz"> 
        <h3>Who was the first president of the United States</h3>
            <ul class = 'q1'>
                <li><input type="radio" name="people" value="George Lopez" class = 'gl'>George Lopez</li>
                <li><input type="radio" name="people" value="George Bush" class = 'gb'>George Bush</li>
                <li><input type="radio" name="people" value="George Washington" class = 'gw'>George Washington</li>
            </ul>
        <h3>What country has the largest population in the world?</h3>
            <ul class = 'q2'>
                <li><input type="radio" name="country" value="India">India</li>
                <li><input type="radio" name="country" value="China">China</li>
                <li><input type="radio" name="country" value="Canada">Canada</li>
            </ul>

        <h3>What year did the first Iphone come out?</h3>
            <ul class = 'q3'>
                <li><input type="radio" name="year" value="2007">2007</li>
                <li><input type="radio" name="year" value="1967">1967</li>
                <li><input type="radio" name="year" value="2000">2000</li>
            </ul>
        <h3>DMV which consists of 3 connected states (NOT DEPARTMENT OF MOTOR VEHICLES SILLY) stands for...</h3>
        <ul class = 'q4'>
            <li><input type="radio" name="states" value="DMV">DC, Maryland and Virginia</li>
            <li><input type="radio" name="states" value="DMV">Delaware, Montana and Vermont</li>
            <li><input type="radio" name="states" value="DMV">Denmark, Michigan and Virgin Islands</li>
        </ul>

        <h3 class = 'q5'>Who was the first computer programmer?</h3>
            <ul>
                <li><input type="radio" name="program" value="Steve">Steve Jobs</li>
                <li><input type="radio" name="program" value="Ada">Ada Lovelace</li>
                <li><input type="radio" name="program" value="Gaga">Lady Gaga</li>
            </ul>
    </section>*/
