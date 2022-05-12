function getMapWithTaglines(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => igMovieMap[key]['taglines'] !== undefined);
    return Object.fromEntries(filtered);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => igMovieMap[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(igMovieMapWithTaglines, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(igMovieMapWithTaglines));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = '';
        if (typeof filterVal === 'undefined' || !filterVal) {
            category = randomItem(igMovieMap[movie]['categories']);
        }
        var randomTagline = randomItem(igMovieMap[movie]['taglines']);
        var question = 'What ' + category + ' film has the tagline "' + randomTagline + '"?';
        var answer = movie;

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

var igMovieMapWithTaglines = getMapWithTaglines(igMovieMap);
var questions = [];
var answers = [];

reset();
