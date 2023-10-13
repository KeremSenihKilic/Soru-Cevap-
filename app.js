const quizData= [
    {
    question: 'What Is The Most Useless Mob On Minecraft?',
    a: 'Glow Squid',
    b: 'Ozelot',
    c: 'Swamp Villager',
    d: 'Panda',
    e: 'Bat',
    correct: 'e',
    },
    {
        question: 'Who Is The Most Hated YouTuber On Roblox?',
        a: 'LeahAshe',
        b: 'Lisa Gaming',
        c: 'Kreekcraft',
        d: 'RussoPlayz',
        e: 'S7YRBLX',
        correct: 'b',
    },
    {
        question: 'What Is The Most Popular Game On Roblox Of All Time?',
        a: 'Welcome To Bloxburg',
        b: 'Pet Simulator X',
        c: 'Adopt Me!',
        d: 'Brookhaven',
        e: 'Tower Of Hell',
        correct: 'd',
    },
    {
        question: 'Which Player Is The Highest Rated On EAFC24',
        a: 'Kevin De Bruyne',
        b: 'Cristiano Ronaldo',
        c: 'Erling Haaland',
        d: 'Lionel Messi',
        e: 'Kylian Mbappe',
        correct: 'c',
    },
    {
        question: 'Which Mob Is The Most Useful Mob On Minecraft?',
        a: 'Golem',
        b: 'Creeper',
        c: 'Blaze',
        d: 'Enderman',
        e: 'Black Smith Villager',
        correct: 'a',
    },
]


const quiz = document.getElementById("quiz")
const answerEls= document.querySelectorAll(".answer")
const questionEl= document.getElementById("question")
 const a_text = document.getElementById("a_text")
 const b_text = document.getElementById("b_text")
 const c_text = document.getElementById("c_text")
 const d_text = document.getElementById("d_text")
 const e_text = document.getElementById("e_text")
 const submitBtn = document.getElementById("submit")
 let currentQuiz = 0
 let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]



    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked =false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=> {
    const answer = getSelected()

    //console.log(answer)

    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++
        }

         currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> The Test Is Complete, You Got ${score * 20} Points 🤩🥳 <h2>
           <button class="submit" onClick="location.reload()"> Try Again 🌀 </button> 
           
            `
        }
    }
})