const correctAnswers = [
    'false',
    'blue',
    'green',
    'feasting before the arrival of Lent',
    'Fat Tuesday',
    'Cowbellion de Rakin Society',
    'New Year\'s Eve',
    'by holding lighted torch parades',
    'Crewe of Comos',
    'Joseph Cain'
];

const arrValues = [];
let tempScore1 = 0;
let tempScore2 = 0;
$result1 = document.getElementById("result1");
$result2 = document.getElementById("result2");
$btn = document.querySelector("input[type='submit']");

$btn.addEventListener('click', (function (event) {
    getElements(arrValues);
    if (arrValues.length == 10) {
        renderAnswers();
        calculateScore();
    } else {
        location.reload();
        return alert('You didn\'t answer for all questions!');
    }
}));

// Gettiing the selected elements to array

function getElements(arrValues) {
    for (let i = 1; i < 11; i++) {
        var ele = document.getElementsByName(i);

        for (let j = 0; j < ele.length; j++) {
            if (ele[j].checked) {
                var radioValue = ele[j].value;
                arrValues.push(radioValue);
            }
        }
    }
    return arrValues;
}

// Rendering answers to DOM in Your Answer & Correct Answer

function renderAnswers() {
    for (let i = 0; i < 10; i++) {
        let $yourAnswer = document.getElementById('answer_value' + (i + 1));
        let $correctAnswer = document.getElementById('correct-value' + (i + 1));
        if (arrValues[i]) {
            $yourAnswer.innerHTML += arrValues[i];
            $correctAnswer.innerHTML += ' ' + correctAnswers[i];
        } else {
            $yourAnswer.innerHTML += 'Not Answer';
        }
    }
}

// Calculating & rendering Your Score results, image, ratioChoice-hidden, answers-visible, 
// explanations-visible

function calculateScore() {
    $ratioChoice = document.getElementsByClassName("anslist");
    $answerBox = document.getElementsByClassName("answerbox");
    /* debugger; */
    for (let i = 0; i < 10; i++) {
        $ratioChoice[i].style.visibility = 'hidden';
        $ratioChoice[i].style.position = 'absolute';
        $answerBox[i].style.visibility = 'visible';
        $answerBox[i].style.position = 'relative';
        if (correctAnswers[i] === arrValues[i]) {
            let $checkedImg = document.getElementById('checked' + i);
            $checkedImg.style.visibility = 'visible';
            tempScore1++;
            tempScore2 += 10;
        } else {
            let $wrongImg = document.getElementById('wrong' + i);
            $wrongImg.style.visibility = 'visible';
        }
    }
    $result1.innerHTML = tempScore1;
    $result2.innerHTML = ' ' + tempScore2;
}

// Stop form refreshing page on submit 

var form = document.getElementById("myForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);