function reset() { 
    var mts_questions = randomItems(5, mts_question_map['questions']);

    questions = [];
    answers = [];
    for (const mts_question of mts_questions) {
        var question = '';
        if (mts_question['category'] != 'N/A') {
            question = '(' + mts_question['category'] + ') ';
        }
        question = question + mts_question['question'];
        var answer = mts_question['answer'];

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
