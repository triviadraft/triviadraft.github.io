function getMapWithCasts(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => movieMap[key]['cast'] !== undefined);
    return Object.fromEntries(filtered);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => movieMap[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(movieMapWithCasts, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(movieMapWithCasts));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(movieMap[movie]['categories']);
        var year = movieMap[movie]['year'];
        var actorList = movieMap[movie]['cast'];
        var randomList = randomItems(3, actorList);

        var actor1 = randomList[0];
        var actor2 = randomList[1];
        var actor3 = randomList[2];
        var question = '';

        if ((typeof filterVal === 'undefined') || (typeof filterVal !== 'undefined' && !filterVal)) {
            question = '(' + category + ') ';
        }

        question += 'What ' + year + ' film features ' + actor1 + ', ' + actor2 + ', and ' + actor3 + '?';
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

var movieMapWithCasts = getMapWithCasts(movieMap);
var questions = [];
var answers = [];

reset();
