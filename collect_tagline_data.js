function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function displayAnswer(n) { 
    document.getElementById('answer' + n).innerHTML = answers[n - 1];
}

function displayAnswers() {
    document.getElementById('answer1').innerHTML = answers[0];
    document.getElementById('answer2').innerHTML = answers[1];
    document.getElementById('answer3').innerHTML = answers[2];
    document.getElementById('answer4').innerHTML = answers[3];
    document.getElementById('answer5').innerHTML = answers[4];
}

function reset() { 
    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(movie_map[movie]['categories'].split(","));
        var random_tagline = randomItem(tagline_map[movie]);
        var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?';
        var answer = movie;

        if (!movie.includes('(1') && !movie.includes('(2')) {
            var year = movie_map[movie]['release'].slice(-4);
            answer += ' (' + year + ')';
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
}

var movies = randomItems(5, Object.keys(tagline_map));

questions = [];
answers = [];
for (const movie of movies) {
    var category = randomItem(movie_map[movie]['categories'].split(","));
    var random_tagline = randomItem(tagline_map[movie]);
    var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?';
    var answer = movie;

    if (!movie.includes('(1') && !movie.includes('(2')) {
        var year = movie_map[movie]['release'].slice(-4);
        answer += ' (' + year + ')';
    }

    questions.push(question);
    answers.push(answer);
}
