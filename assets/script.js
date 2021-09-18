const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const infoBox = document.getElementById('info_box')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click' , () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    infoBox.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }  else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
const questions = [
    {
        question: 'What is the general purpose for JavaScript?',
        answers: [
            {text: 'To interact with a web page', correct: true },
            {text: 'To copy coffee recepies correctly', correct: false },
            {text: 'For styling the HTML', correct: false },
            {text: 'The beginning code for a web page', correct: false },
        ]
    },
    {
        question: 'What year was JavaScript created?',
        answers: [
            {text: '2007', correct: false },
            {text: '1991', correct: false },
            {text: '1995', correct: true },
            {text: '2003', correct: false },
        ]
    },  {
        question: 'What are the 3 languages for frontend development?',
        answers: [
            {text: 'Python, C#, GO', correct: false },
            {text: 'HTML, CSS, JavaScript', correct: true },
            {text: 'C++, PHP, Swift', correct: false },
            {text: 'Java, C, R', correct: false },
        ]
    },  {
        question: 'What does CSS need in order to work?',
        answers: [
            {text: 'An HTML page prepared with Inline Style, a Interal Style Sheet or a External Style Sheet', correct: true },
            {text: 'Prior authorization from the World Wide Consortium', correct: false },
            {text: 'At least 3 monitors', correct: false },
            {text: 'A subscription to HTML magazine', correct: false },
        ]
    },  {
        question: 'When was the internet created?',
        answers: [
            {text: 'March 15th, 1982', correct: false },
            {text: 'June 1st, 1986', correct: false },
            {text: 'September 9th, 2001', correct: false },
            {text: 'January 1st, 1983', correct: true },
        ]
    },
]