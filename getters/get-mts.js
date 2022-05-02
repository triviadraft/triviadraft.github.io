function getFilteredList(list, filterVal) {
    if (filterVal === 'Andersons') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Paul Thomas Anderson');
    } else if (filterVal === 'Barrymore Family') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Drew Barrymore');
    } else if (filterVal === 'Brad Pitt & George Clooney') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Brad Pitt');
    } else if (filterVal === 'Coppolas') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Francis Ford Coppola');
    } else if (filterVal === 'DC') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'DCEU');
    } else if (filterVal === 'Dystopian Future & Time Travel') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Back to the Future');
    } else if (filterVal === 'Eastwoods') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Clint Eastwood');
    } else if (filterVal === 'Hasbro') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Transformers');
    } else if (filterVal === 'Hepburns') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Audrey Hepburn');
    } else if (filterVal === 'Marvel') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'MCU');
     } else if (filterVal === 'Middle-earth') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Lord of the Rings' || item['category'] === 'The Hobbit');
    } else if (filterVal === 'Paul Newman & Robert Redford') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Paul Newman' || item['category'] === 'Robert Redford');
    } else if (filterVal === 'Quentin Tarantino & Robert Rodriguez') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Quentin Tarantino' || item['category'] === 'Robert Rodriguez');
    } else if (filterVal === 'Robert De Niro & Joe Pesci') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Robert De Niro');
    } else if (filterVal === 'Scotts') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Ridley Scott');
    } else if (filterVal === 'Happy Madison & Adam Sandler') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Adam Sandler');
     } else if (filterVal === 'IG Mixed Bag') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Innergeekdom');
    } else if (filterVal === 'Sheens') {
        return list.filter((item) => item['category'] === 'Charlie Sheen');
    } else if (filterVal === 'SNL & Lorne Michaels') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'SNL');
    } else if (filterVal === 'Swashbuckling & Pulp Adventure') {
        return list.filter((item) => item['category'].includes('Swashbuckling'));
    } else if (filterVal === 'Wizarding World') {
        return list.filter((item) => item['category'] === filterVal || item['category'] === 'Harry Potter');
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
