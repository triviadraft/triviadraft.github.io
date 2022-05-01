function reset() { 
    var mtsQuestions = randomItems(5, mtsQuestionMap['questions']);

    questions = [];
    answers = [];
    for (const mtsQuestion of mtsQuestions) {
        var question = '';
        if (mtsQuestion['category'] != 'N/A') {
            question = '(' + mtsQuestion['category'] + ') ';
        }
        question = question + mtsQuestion['question'];
        var answer = mtsQuestion['answer'];

        questions.push(question);
        answers.push(answer);
    }

    document.getElementById("question1").innerHTML = questions[0];
    document.getElementById("question2").innerHTML = questions[1];
    document.getElementById("question3").innerHTML = questions[2];
    document.getElementById("question4").innerHTML = questions[3];
    document.getElementById("question5").innerHTML = questions[4];
    resetAnswers();
}

var questions = [];
var answers = [];
reset();
