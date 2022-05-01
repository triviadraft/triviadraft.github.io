function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => value['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(movieMap, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(movieMap));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var title = movieMap[movie]['title'];
        var year = movieMap[movie]['year'];
        var questionTypes = ['year','synopsis','actors'];
        if (movieMap[movie]['directors'][0] in directorMap) {
            questionTypes.push('director');
        }
        var questionType = randomItem(questionTypes);

        if (questionType == 'year') {
            var question = 'In what year was ' + makeNameString(movieMap[movie]['directors']) + '\'s ' + title + ' released?';
            var answer = year;
        } else if (questionType == 'synopsis') {
            var question = 'What ' + year + ' movie has the synopsis "' + movieMap[movie]['synopsis'] + '"?'
            var answer = title;
        } else if (questionType == 'director') {
            var question = 'Who directed ' + title + ' in ' + year + '?';
            var answer = makeNameString(movieMap[movie]['directors']);
        } else if (questionType == 'actors') {
            var question = 'What ' + year + ' movie has the lead actors ' + makeNameString(movieMap[movie]['leads']) + '?';
            var answer = title;
        }

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
