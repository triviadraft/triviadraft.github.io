function getMapWithNominations(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => 'leadNoms' in map[key] || 'suppNoms' in map[key]);
    return Object.fromEntries(filtered);
}

function getMapWithWins(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => 'leadWins' in map[key] || 'suppWins' in map[key]);
    return Object.fromEntries(filtered);
}


function reset() { 
    if (typeof filterVal !== 'undefined' && filterVal === 'Wins') {
        var actors = randomItems(5, Object.keys(actorMapWithWins));
    } else {
        var actors = randomItems(5, Object.keys(actorMapWithNominations));
    }

    questions = [];
    answers = [];
    for (const actor of actors) {
        var questionTypes = [];
        var leadMovies = actorMapWithNominations[actor]['leadNoms'];
        var suppMovies = actorMapWithNominations[actor]['suppNoms'];
        var leadWinMovies = actorMapWithNominations[actor]['leadWins'];
        var suppWinMovies = actorMapWithNominations[actor]['suppWins'];
        if ((typeof filterVal === 'undefined') || !filterVal || (typeof filterVal !== 'undefined' && filterVal === 'Nominations')) {
            if (leadMovies) {
                questionTypes.push('leadMovie');
                questionTypes.push('leadMovie');
                questionTypes.push('leadYear');
            }
            if (suppMovies) {
                questionTypes.push('suppMovie');
                questionTypes.push('suppMovie');
                questionTypes.push('suppYear');
            }
        }
        if ((typeof filterVal === 'undefined') || !filterVal || (typeof filterVal !== 'undefined' && filterVal === 'Wins')) {
            if (leadWinMovies) {
                questionTypes.push('leadWinMovie');
                questionTypes.push('leadWinMovie');
                questionTypes.push('leadWinYear');
            }
            if (suppWinMovies) {
                questionTypes.push('suppWinMovie');
                questionTypes.push('suppWinMovie');
                questionTypes.push('suppWinYear');
            }
        }
        var questionType = randomItem(questionTypes);

        if (questionType == 'leadMovie') {
            var leadMovie = randomItem(leadMovies);
            var question = actor + ' was nominated for an Oscar for their lead role in what ' + leadMovie['year'] + ' movie?';
            var answer = leadMovie['movie'];
        } else if (questionType == 'leadWinMovie') {
            var leadMovie = randomItem(leadWinMovies);
            var question = actor + ' won an Oscar for their lead role in what ' + leadMovie['year'] + ' movie?';
            var answer = leadMovie['movie'];
        } else if (questionType == 'leadYear') {
            var leadMovie = randomItem(leadMovies);
            var question = actor + ' was nominated for an Oscar for their lead role in ' + leadMovie['movie'] + ' in what year?';
            var answer = leadMovie['year'];
        } else if (questionType == 'leadWinYear') {
            var leadMovie = randomItem(leadWinMovies);
            var question = actor + ' won an Oscar for their lead role in ' + leadMovie['movie'] + ' in what year?';
            var answer = leadMovie['year'];
        } else if (questionType == 'suppMovie') {
            var suppMovie = randomItem(suppMovies);
            var question = actor + ' was nominated for an Oscar for their supporting role in what ' + suppMovie['year'] + ' movie?';
            var answer = suppMovie['movie'];
        } else if (questionType == 'suppWinMovie') {
            var suppMovie = randomItem(suppWinMovies);
            var question = actor + ' won an Oscar for their supporting role in what ' + suppMovie['year'] + ' movie?';
            var answer = suppMovie['movie'];
        } else if (questionType == 'suppYear') {
            var suppMovie = randomItem(suppMovies);
            var question = actor + ' was nominated for an Oscar for their supporting role in ' + suppMovie['movie'] + ' in what year?';
            var answer = suppMovie['year'];
        } else if (questionType == 'suppWinYear') {
            var suppMovie = randomItem(suppWinMovies);
            var question = actor + ' won for an Oscar for their supporting role in ' + suppMovie['movie'] + ' in what year?';
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

var actorMapWithNominations = getMapWithNominations(actorMap);
var actorMapWithWins = getMapWithWins(actorMap);
var questions = [];
var answers = [];
reset();
