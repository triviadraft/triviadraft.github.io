function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function displayAnswers() {
    document.getElementById('answer1').innerHTML = answers[0];
    document.getElementById('answer2').innerHTML = answers[1];
    document.getElementById('answer3').innerHTML = answers[2];
    document.getElementById('answer4').innerHTML = answers[3];
    document.getElementById('answer5').innerHTML = answers[4];
    document.getElementById('displayBtn').disabled = true;
}

function reset() { 
    directors = randomItems(5, Object.keys(director_map));

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
    document.getElementById('answer1').innerHTML = '';
    document.getElementById('answer2').innerHTML = '';
    document.getElementById('answer3').innerHTML = '';
    document.getElementById('answer4').innerHTML = '';
    document.getElementById('answer5').innerHTML = '';
    document.getElementById('displayBtn').disabled = false;
}

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
