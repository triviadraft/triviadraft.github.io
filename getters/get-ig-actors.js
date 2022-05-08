function getMapWithThreeFranchises(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => Object.keys(map[key]['movies']).length >= 3);
    return Object.fromEntries(filtered);
}

function reset() {
    var actors = randomItems(5, Object.keys(igActorMapWithThreeFranchises));

    questions = [];
    answers = [];
    for (const actor of actors) {
        var movieList = Object.keys(igActorMapWithThreeFranchises[actor]['movies']);
        var randomList = randomItems(3, movieList);

        var movie1 = randomItem(igActorMapWithThreeFranchises[actor]['movies'][randomList[0]]);
        var movie2 = randomItem(igActorMapWithThreeFranchises[actor]['movies'][randomList[1]]);
        var movie3 = randomItem(igActorMapWithThreeFranchises[actor]['movies'][randomList[2]]);
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

var igActorMapWithThreeFranchises = getMapWithThreeFranchises(igActorMap);
var questions = [];
var answers = [];

reset();
