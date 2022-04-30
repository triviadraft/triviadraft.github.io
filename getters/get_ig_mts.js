function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

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

function showAnswer(n) {
    document.getElementById('answer' + n).innerHTML = answers[n-1];
    document.getElementById('showBtn' + n).hidden = true;
    if (document.getElementById('showBtn1').hidden &&
        document.getElementById('showBtn2').hidden &&
        document.getElementById('showBtn3').hidden &&
        document.getElementById('showBtn4').hidden &&
        document.getElementById('showBtn5').hidden) {
        document.getElementById('showAllBtn').disabled = true;
    }
}
function showAnswers() {
    document.getElementById('answer1').innerHTML = answers[0];
    document.getElementById('answer2').innerHTML = answers[1];
    document.getElementById('answer3').innerHTML = answers[2];
    document.getElementById('answer4').innerHTML = answers[3];
    document.getElementById('answer5').innerHTML = answers[4];
    document.getElementById('showBtn1').hidden = true;
    document.getElementById('showBtn2').hidden = true;
    document.getElementById('showBtn3').hidden = true;
    document.getElementById('showBtn4').hidden = true;
    document.getElementById('showBtn5').hidden = true;
    document.getElementById('showAllBtn').disabled = true;
}

function reset() { 
    if (typeof filterVal !== 'undefined' && filterVal) {
        mts_questions = randomItems(5, getFilteredList(mts_question_map['questions'], filterVal));
    } else {
        mts_questions = randomItems(5, mts_question_map['questions']);
    }

    questions = [];
    answers = [];
    for (const mts_question of mts_questions) {
        var question = '';
        if ((typeof filterVal === 'undefined' && mts_question['category'] != 'N/A') || (typeof filterVal !== 'undefined' && !filterVal)) {
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
    document.getElementById('answer1').innerHTML = '';
    document.getElementById('answer2').innerHTML = '';
    document.getElementById('answer3').innerHTML = '';
    document.getElementById('answer4').innerHTML = '';
    document.getElementById('answer5').innerHTML = '';
    document.getElementById('showBtn1').hidden = false;
    document.getElementById('showBtn2').hidden = false;
    document.getElementById('showBtn3').hidden = false;
    document.getElementById('showBtn4').hidden = false;
    document.getElementById('showBtn5').hidden = false;
    document.getElementById('showAllBtn').disabled = false;
}

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
