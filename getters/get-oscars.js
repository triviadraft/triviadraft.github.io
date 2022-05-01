function reset() { 
    var actors = randomItems(5, Object.keys(actorOscarMap));

    questions = [];
    answers = [];
    for (const actor of actors) {
        var questionTypes = [];
        var leadMovies = actorOscarMap[actor]['lead'];
        var suppMovies = actorOscarMap[actor]['supporting'];
        if (leadMovies) {
            questionTypes.push('leadMovie');
            questionTypes.push('leadYear');
        }
        if (suppMovies) {
            questionTypes.push('suppMovie');
            questionTypes.push('suppYear');
        }
        var questionType = randomItem(questionTypes);

        if (questionType == 'leadMovie') {
            var leadMovie = randomItem(leadMovies);
            var question = actor + ' was nominated for their lead role in what ' + leadMovie['year'] + ' movie?';
            var answer = leadMovie['movie'];
        } else if (questionType == 'leadYear') {
            var leadMovie = randomItem(leadMovies);
            var question = actor + ' was nominated for their lead role in ' + leadMovie['movie'] + ' in what year?';
            var answer = leadMovie['year'];
        } else if (questionType == 'suppMovie') {
            var suppMovie = randomItem(suppMovies);
            var question = actor + ' was nominated for their supporting role in what ' + suppMovie['year'] + ' movie?';
            var answer = suppMovie['movie'];
        } else if (questionType == 'suppYear') {
            var suppMovie = randomItem(suppMovies);
            var question = actor + ' was nominated for their supporting role in ' + suppMovie['movie'] + ' in what year?';
            var answer = suppMovie['year'];
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
