function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function getFilteredMap(map, filterVal) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['categories'].includes(filterVal));
    return Object.fromEntries(filtered);
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
    if (typeof filterVal !== 'undefined') {
        movies = randomItems(5, Object.keys(getFilteredMap(ig_cast_map, filterVal)));
    } else {
        movies = randomItems(5, Object.keys(ig_cast_map));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var category = randomItem(ig_movie_map[movie]['categories']);
        var actor_list = ig_cast_map[movie]['supporting'];
        var random_list = randomItems(3, actor_list);

        var actor1 = random_list[0]['actor'];
        var actor2 = random_list[1]['actor'];
        var actor3 = random_list[2]['actor'];
        var name1 = random_list[0]['name'];
        if (random_list[0]['description']) {
            name1 += ' (' + random_list[0]['description'] + ')';
        }
        var name2 = random_list[1]['name'];
        if (random_list[1]['description']) {
            name2 += ' (' + random_list[1]['description'] + ')';
        }
        var name3 = random_list[2]['name'];
        if (random_list[2]['description']) {
            name3 += ' (' + random_list[2]['description'] + ')';
        }

        var question = 'What ' + category + ' film includes ' + actor1 + ', ' + actor2 + ', and ' + actor3 + '?';
        var answer = movie;

        if (!movie.includes('(1') && !movie.includes('(2')) {
            var year = ig_movie_map[movie]['year'];
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
    document.getElementById('showBtn1').hidden = false;
    document.getElementById('showBtn2').hidden = false;
    document.getElementById('showBtn3').hidden = false;
    document.getElementById('showBtn4').hidden = false;
    document.getElementById('showBtn5').hidden = false;
    document.getElementById('showAllBtn').disabled = false;
}

var movies = randomItems(5, Object.keys(ig_cast_map));
questions = [];
answers = [];
for (const movie of movies) {
    var category = randomItem(ig_movie_map[movie]['categories']);
    var actor_list = ig_cast_map[movie]['supporting'];
    var random_list = randomItems(3, actor_list);

    var actor1 = random_list[0]['actor'];
    var actor2 = random_list[1]['actor'];
    var actor3 = random_list[2]['actor'];
    var name1 = random_list[0]['name'];
    if (random_list[0]['description']) {
        name1 += ' (' + random_list[0]['description'] + ')';
    }
    var name2 = random_list[1]['name'];
    if (random_list[1]['description']) {
        name2 += ' (' + random_list[1]['description'] + ')';
    }
    var name3 = random_list[2]['name'];
    if (random_list[2]['description']) {
        name3 += ' (' + random_list[2]['description'] + ')';
    }

    var question = 'What ' + category + ' film includes ' + actor1 + ', ' + actor2 + ', and ' + actor3 + '?';
    var answer = movie;

    if (!movie.includes('(1') && !movie.includes('(2')) {
        var year = ig_movie_map[movie]['year'];
        answer += ' (' + year + ')';
    }

    questions.push(question);
    answers.push(answer);
}
