function reset() { 
    var directors = randomItems(5, Object.keys(director_map));

    questions = [];
    answers = [];
    for (const director of directors) {
        var question_types = ['director','movie'];
        var question_type = randomItem(question_types);
        var director_movies = director_map[director];
        var director_movie = randomItem(director_movies);

        if (question_type == 'director') {
            var question = 'Who directed ' + director_movie['movie'] + ' in ' + director_movie['year'] + '?';
            var answer = director;
        } else if (question_type == 'movie') {
            var question = director + ' directed what movie in ' + director_movie['year'] + '?';
            var answer = director_movie['movie'];
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
