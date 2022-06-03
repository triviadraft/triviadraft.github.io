function getMapWithThreeFranchises(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => Object.keys(map[key]['movies']).length >= 3);
    const mapWithThreeFranchises = Object.fromEntries(filtered);
    delete mapWithThreeFranchises['Callan Mulvey'];
    delete mapWithThreeFranchises['David Warner'];
    delete mapWithThreeFranchises['Dee Bradley Baker'];
    delete mapWithThreeFranchises['Deep Roy'];
    delete mapWithThreeFranchises['DeObia Oparei'];
    delete mapWithThreeFranchises['Frank Welker'];
    delete mapWithThreeFranchises['Fred Tatasciore'];
    delete mapWithThreeFranchises['Garrick Hagon'];
    delete mapWithThreeFranchises['Glenn Morshower'];
    delete mapWithThreeFranchises['Holt McCallany'];
    delete mapWithThreeFranchises['James Arnold Taylor'];
    delete mapWithThreeFranchises['Karel Roden'];
    delete mapWithThreeFranchises['Lee Arenberg'];
    delete mapWithThreeFranchises['Marton Csokas'];
    delete mapWithThreeFranchises['Michael Massee'];
    delete mapWithThreeFranchises['Robert Maillet'];
    delete mapWithThreeFranchises['Terry Notary'];
    return mapWithThreeFranchises;
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
