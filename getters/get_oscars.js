function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function showAnswer(n) {
    document.getElementById('answer' + n).innerHTML = answers[n-1];
    document.getElementById('showBtn' + n).hidden = true;
    if (document.getElementById('showBtn1').hidden &&
        document.getElementById('showBtn2').hidden &&
        document.getElementById('showBtn3').hidden &&
        document.getElementById('showBtn4').hidden &&
        document.getElementById('showBtn5').hidden) {
        document.getElementById('showAllBtn').disabled = true;
    }
}

function showAnswers() {
    document.getElementById('answer1').innerHTML = answers[0];
    document.getElementById('answer2').innerHTML = answers[1];
    document.getElementById('answer3').innerHTML = answers[2];
    document.getElementById('answer4').innerHTML = answers[3];
    document.getElementById('answer5').innerHTML = answers[4];
    document.getElementById('showBtn1').hidden = true;
    document.getElementById('showBtn2').hidden = true;
    document.getElementById('showBtn3').hidden = true;
    document.getElementById('showBtn4').hidden = true;
    document.getElementById('showBtn5').hidden = true;
    document.getElementById('showAllBtn').disabled = true;
}

function reset() { 
    actors = randomItems(5, Object.keys(actor_oscar_map));

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
            var question = actor + ' was nominated for their lead role in what ' + lead_movie['year'] + ' movie?';
            var answer = lead_movie['movie'];
        } else if (question_type == 'lead_year') {
            var lead_movie = randomItem(lead_movies);
            var question = actor + ' was nominated for their lead role in ' + lead_movie['movie'] + ' in what year?';
            var answer = lead_movie['year'];
        } else if (question_type == 'supporting_movie') {
            var supp_movie = randomItem(supp_movies);
            var question = actor + ' was nominated for their supporting role in what ' + supp_movie['year'] + ' movie?';
            var answer = supp_movie['movie'];
        } else if (question_type == 'supporting_year') {
            var supp_movie = randomItem(supp_movies);
            var question = actor + ' was nominated for their supporting role in ' + supp_movie['movie'] + ' in what year?';
            var answer = supp_movie['year'];
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
    document.getElementById('showBtn1').hidden = false;
    document.getElementById('showBtn2').hidden = false;
    document.getElementById('showBtn3').hidden = false;
    document.getElementById('showBtn4').hidden = false;
    document.getElementById('showBtn5').hidden = false;
    document.getElementById('showAllBtn').disabled = false;
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
        var question = actor + ' was nominated for their lead role in what ' + lead_movie['year'] + ' movie?';
        var answer = lead_movie['movie'];
    } else if (question_type == 'lead_year') {
        var lead_movie = randomItem(lead_movies);
        var question = actor + ' was nominated for their lead role in ' + lead_movie['movie'] + ' in what year?';
        var answer = lead_movie['year'];
    } else if (question_type == 'supporting_movie') {
        var supp_movie = randomItem(supp_movies);
        var question = actor + ' was nominated for their supporting role in what ' + supp_movie['year'] + ' movie?';
        var answer = supp_movie['movie'];
    } else if (question_type == 'supporting_year') {
        var supp_movie = randomItem(supp_movies);
        var question = actor + ' was nominated for their supporting role in ' + supp_movie['movie'] + ' in what year?';
        var answer = supp_movie['year'];
    }

    questions.push(question);
    answers.push(answer);
}
