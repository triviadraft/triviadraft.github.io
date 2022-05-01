function getMapWithCasts(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => igMovieMap[key]['supportingCast'] !== undefined);
    return Object.fromEntries(filtered);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => igMovieMap[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(igMovieMapWithCasts, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(igMovieMapWithCasts));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(igMovieMap[movie]['categories']);
        var actorList = igMovieMap[movie]['supportingCast'];
        var randomList = randomItems(3, actorList);

        var actor1 = randomList[0]['actor'];
        var actor2 = randomList[1]['actor'];
        var actor3 = randomList[2]['actor'];
        var name1 = randomList[0]['name'];
        if (randomList[0]['description']) {
            name1 += ' (' + randomList[0]['description'] + ')';
        }
        var name2 = randomList[1]['name'];
        if (randomList[1]['description']) {
            name2 += ' (' + randomList[1]['description'] + ')';
        }
        var name3 = randomList[2]['name'];
        if (randomList[2]['description']) {
            name3 += ' (' + randomList[2]['description'] + ')';
        }

        var question = 'What ' + category + ' film includes ' + actor1 + ', ' + actor2 + ', and ' + actor3 + '?';
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

var igMovieMapWithCasts = getMapWithCasts(igMovieMap);
var questions = [];
var answers = [];

reset();
