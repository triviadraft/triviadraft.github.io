function getFilteredList(list, filterVal) {
    if (filterVal === 'Heroes & Villains') {
        return list.filter((item) => item['category'].includes('Heroes') || item['category'].includes('Villains'));
    } else if (filterVal === 'Original Trilogy') {
        return list.filter((item) => item['category'] === 'A New Hope' || item['category'] === 'The Empire Strikes Back' || item['category'] === 'Return of the Jedi');
    } else if (filterVal === 'Prequel Trilogy') {
        return list.filter((item) => item['category'] === 'The Phantom Menace' || item['category'] === 'Attack of the Clones' || item['category'] === 'Revenge of the Sith');
    } else if (filterVal === 'Sequel Trilogy') {
        return list.filter((item) => item['category'] === 'The Force Awakens' || item['category'] === 'A Last Jedi' || item['category'] === 'The Rise of Skywalker');
    } else if (filterVal === 'Vehicles & Weapons') {
        return list.filter((item) => item['category'].includes('Vehicles') || item['category'].includes('Weapons'));
    } else {
        return list.filter((item) => item['category'] === filterVal);
    }
}

function reset() { 
    if (typeof filterVal !== 'undefined' && filterVal) {
        var mtsQuestions = randomItems(5, getFilteredList(mtsQuestionMap['questions'], filterVal));
    } else {
        var mtsQuestions = randomItems(5, mtsQuestionMap['questions']);
    }

    questions = [];
    answers = [];
    for (const mtsQuestion of mtsQuestions) {
        var question = '';
        if ((typeof filterVal === 'undefined' && mtsQuestion['category'] != 'N/A') || (typeof filterVal !== 'undefined' && !filterVal && mtsQuestion['category'] != 'N/A')) {
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
