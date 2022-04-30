function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function getFilteredMap(map, filter) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => value['categories'].includes(filter));
    return Object.fromEntries(filtered);
}

function makeString(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] + ' and ' + arr[1];
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.join(', ') + ', and ' + last;
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
    if (filter) {
        movies = randomItems(5, Object.keys(getFilteredMap(movie_map, filter)));
    } else {
        movies = randomItems(5, Object.keys(movie_map));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
        var title = movie_map[movie]['title'];
        var year = movie_map[movie]['year'];
        var question_types = ['year','synopsis','actors'];
        if (movie_map[movie]['directors'][0] in director_map) {
            question_types.push('director');
        }
        var question_type = randomItem(question_types);

        if (question_type == 'year') {
            var question = 'In what year was ' + makeString(movie_map[movie]['directors']) + '\'s ' + title + ' released?';
            var answer = year;
        } else if (question_type == 'synopsis') {
            var question = 'What ' + year + ' movie has the synopsis "' + movie_map[movie]['synopsis'] + '"?'
            var answer = title;
        } else if (question_type == 'director') {
            var question = 'Who directed ' + title + ' in ' + year + '?';
            var answer = makeString(movie_map[movie]['directors']);
        } else if (question_type == 'actors') {
            var question = 'What ' + year + ' movie has the lead actors ' + makeString(movie_map[movie]['leads']) + '?';
            var answer = title;
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

var movies = randomItems(5, Object.keys(movie_map));

questions = [];
answers = [];
for (const movie of movies) {
    var title = movie_map[movie]['title'];
    var year = movie_map[movie]['year'];
    var question_types = ['year','synopsis','actors'];
    if (movie_map[movie]['directors'][0] in director_map) {
            question_types.push('director');
    }
    var question_type = randomItem(question_types);

    if (question_type == 'year') {
        var question = 'In what year was ' + makeString(movie_map[movie]['directors']) + '\'s ' + title + ' released?';
        var answer = year;
    } else if (question_type == 'synopsis') {
        var question = 'What ' + year + ' movie has the synopsis "' + movie_map[movie]['synopsis'] + '"?'
        var answer = title;
    } else if (question_type == 'director') {
        var question = 'Who directed ' + title + ' in ' + year + '?';
        var answer = makeString(movie_map[movie]['directors']);
    } else if (question_type == 'actors') {
        var question = 'What ' + year + ' movie has the lead actors ' + makeString(movie_map[movie]['leads']) + '?';
        var answer = title;
    }

    questions.push(question);
    answers.push(answer);
}
