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
    movies = randomItems(5, Object.keys(movie_map));

    questions = [];
    answers = [];
    for (const movie of movies) {
        var title = movie['title'];
        var year = movie['year'];
        var question_types = ['year','synopsis','director'];
        var question_type = randomItem(question_types);

        if (question_type == 'year') {
            var question = 'In what year was ' + title + 'released?';
            var answer = year;
        } else if (question_type == 'synopsis') {
            var question = 'What movie has the synopsis "' + movie['synopsis'] + '"?'
            var answer = title;
        } else if (question_type == 'director') {
            var question = 'Who directed ' + title + ' in ' + year + '?';
            var answer = movie['director'];
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

var movies = randomItems(5, Object.keys(movie_map));

questions = [];
answers = [];
for (const movie of movies) {
    var title = movie['title'];
    var year = movie['year'];
    var question_types = ['year','synopsis','director'];
    var question_type = randomItem(question_types);

    if (question_type == 'year') {
        var question = 'In what year was ' + title + 'released?';
        var answer = year;
    } else if (question_type == 'synopsis') {
        var question = 'What movie has the synopsis "' + movie['synopsis'] + '"?'
        var answer = title;
    } else if (question_type == 'director') {
        var question = 'Who directed ' + title + ' in ' + year + '?';
        var answer = movie['director'];
    }

    questions.push(question);
    answers.push(answer);
}
