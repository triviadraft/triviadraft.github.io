function getFilteredList(list, filterVal) {
    if (filterVal === 'Dystopian Future & Time Travel') {
        return list.filter((item) => item['category'].includes(filterVal) || item['category'].includes('Back to the Future'));
    } else if (filterVal === 'Hasbro') {
        return list.filter((item) => item['category'].includes(filterVal) || item['category'].includes('Transformers'));
    } else if (filterVal === 'Marvel') {
        return list.filter((item) => item['category'].includes(filterVal) || item['category'].includes('MCU'));
     } else if (filterVal === 'Middle-earth') {
        return list.filter((item) => item['category'].includes(filterVal) || item['category'].includes('Lord of the Rings') || item['category'].includes('The Hobbit'));
    } else if (filterVal === 'Wizarding World') {
        return list.filter((item) => item['category'].includes(filterVal) || item['category'].includes('Harry Potter'));
    } else {
        return list.filter((item) => item['category'].includes(filterVal));
    }
}

function reset() { 
    if (typeof filterVal !== 'undefined' && filterVal) {
        var mts_questions = randomItems(5, getFilteredList(mts_question_map['questions'], filterVal));
    } else {
        var mts_questions = randomItems(5, mts_question_map['questions']);
    }

    questions = [];
    answers = [];
    for (const mts_question of mts_questions) {
        var question = '';
        if ((typeof filterVal === 'undefined' && mts_question['category'] != 'N/A') || (typeof filterVal !== 'undefined' && !filterVal && mts_question['category'] != 'N/A')) {
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
