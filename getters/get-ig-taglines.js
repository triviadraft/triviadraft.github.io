function getMapWithTaglines(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['taglines'] !== undefined);
    return Object.fromEntries(filtered);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(ig_movie_map_with_taglines, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(ig_movie_map_with_taglines));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(ig_movie_map[movie]['categories']);
        var random_tagline = randomItem(ig_movie_map[movie]['taglines']);
        var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?';
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

var ig_movie_map_with_taglines = getMapWithTaglines(ig_movie_map);
var questions = [];
var answers = [];

reset();
