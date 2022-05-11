function getMapWithThreeMovies(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => 'movies' in map[key] && map[key]['movies'].length >= 5);
    return Object.fromEntries(filtered);
}

function reset() {
    var actors = randomItems(5, Object.keys(actorMapWithThreeMovies));

    questions = [];
    answers = [];
    for (const actor of actors) {
        var movieList = actorMap[actor]['movies'];
        var randomList = randomItems(3, movieList);

        var movie1 = randomList[0];
        var movie2 = randomList[1];
        var movie3 = randomList[2];
        var question = '';

        question += 'What actor appeared in ' + movie1 + ', ' + movie2 + ', and ' + movie3 + '?';
        var answer = actor;

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

var actorMapWithThreeMovies = getMapWithThreeMovies(actorMap);
var questions = [];
var answers = [];

reset();
