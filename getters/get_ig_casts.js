function getMapWithCasts(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['supportingCast'] !== undefined);
    return Object.fromEntries(filtered);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
}

function reset() {
    if (typeof filterVal !== 'undefined' && filterVal) {
        var movies = randomItems(5, Object.keys(getFilteredMap(ig_movie_map_with_casts, filterVal)));
    } else {
        var movies = randomItems(5, Object.keys(ig_movie_map_with_casts));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(ig_movie_map[movie]['categories']);
        var actor_list = ig_movie_map[movie]['supportingCast'];
        var random_list = randomItems(3, actor_list);

        var actor1 = random_list[0]['actor'];
        var actor2 = random_list[1]['actor'];
        var actor3 = random_list[2]['actor'];
        var name1 = random_list[0]['name'];
        if (random_list[0]['description']) {
            name1 += ' (' + random_list[0]['description'] + ')';
        }
        var name2 = random_list[1]['name'];
        if (random_list[1]['description']) {
            name2 += ' (' + random_list[1]['description'] + ')';
        }
        var name3 = random_list[2]['name'];
        if (random_list[2]['description']) {
            name3 += ' (' + random_list[2]['description'] + ')';
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

var ig_movie_map_with_casts = getMapWithCasts(ig_movie_map);
var questions = [];
var answers = [];

reset();
