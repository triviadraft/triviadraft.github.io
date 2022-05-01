function reset() { 
    var directors = randomItems(5, Object.keys(directorMap));

    questions = [];
    answers = [];
    for (const director of directors) {
        var questionTypes = ['director','movie'];
        var questionType = randomItem(questionTypes);
        var directorMovies = directorMap[director];
        var directorMovie = randomItem(directorMovies);

        if (questionType == 'director') {
            var question = 'Who directed ' + directorMovie['movie'] + ' in ' + directorMovie['year'] + '?';
            var answer = director;
        } else if (questionType == 'movie') {
            var question = director + ' directed what movie in ' + directorMovie['year'] + '?';
            var answer = directorMovie['movie'];
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
