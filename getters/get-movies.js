function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => value['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(movie_map, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(movie_map));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var title = movie_map[movie]['title'];
        var year = movie_map[movie]['year'];
        var question_types = ['year','synopsis','actors'];
        if (movie_map[movie]['directors'][0] in director_map) {
            question_types.push('director');
        }
        var question_type = randomItem(question_types);

        if (question_type == 'year') {
            var question = 'In what year was ' + makeNameString(movie_map[movie]['directors']) + '\'s ' + title + ' released?';
            var answer = year;
        } else if (question_type == 'synopsis') {
            var question = 'What ' + year + ' movie has the synopsis "' + movie_map[movie]['synopsis'] + '"?'
            var answer = title;
        } else if (question_type == 'director') {
            var question = 'Who directed ' + title + ' in ' + year + '?';
            var answer = makeNameString(movie_map[movie]['directors']);
        } else if (question_type == 'actors') {
            var question = 'What ' + year + ' movie has the lead actors ' + makeNameString(movie_map[movie]['leads']) + '?';
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
