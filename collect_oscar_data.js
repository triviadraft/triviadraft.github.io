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
    actors = randomItems(5, Object.keys(actor_oscar_map));

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
    document.getElementById('displayBtn').disabled = false;
}

var actors = randomItems(5, Object.keys(actor_oscar_map));

questions = [];
answers = [];
for (const actor of actors) {
    var question_types = [];
    var lead_movies = actor_oscar_map[actor]['lead'];
    var supp_movies = actor_oscar_map[actor]['supporting'];
    if (lead_movies) {
        question_types.push('lead_movie');
        question_types.push('lead_year');
    }
    if (supp_movies) {
        question_types.push('supporting_movie');
        question_types.push('supporting_year');
    }
    var question_type = randomItem(question_types);

    if (question_type == 'lead_movie') {
        var lead_movie = randomItem(lead_movies);
        var question = actor + ' was nominated for their ' + question_type + 'performance for what ' + lead_movie['year'] + ' movie?';
        var answer = lead_movie['movie'];
    } else if (question_type == 'lead_year') {
        var lead_movie = randomItem(lead_movies);
        var question = actor + ' was nominated for their ' + question_type + 'performance in ' + lead_movie['movie'] + ' in what year?';
        var answer = lead_movie['year'];
    } else if (question_type == 'supporting_movie') {
        var supp_movie = randomItem(supp_movies);
        var question = actor + ' was nominated for their ' + question_type + 'performance for what ' + supp_movie['year'] + ' movie?';
        var answer = supp_movie['movie'];
    } else if (question_type == 'supporting_year') {
        var supp_movie = randomItem(supp_movies);
        var question = actor + ' was nominated for their ' + question_type + 'performance in ' + supp_movie['movie'] + ' in what year?';
        var answer = supp_movie['year'];
    }

    questions.push(question);
    answers.push(answer);
}