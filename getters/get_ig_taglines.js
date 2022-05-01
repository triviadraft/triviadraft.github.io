function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function getMapWithTaglines(map) {
    const asArray = Object.entries(map);
    filtered = asArray.filter(([key, value]) => ig_movie_map[key]['taglines'] !== undefined);
    return Object.fromEntries(filtered);
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
        movies = randomItems(5, Object.keys(getFilteredMap(ig_movie_map_with_taglines, filterVal)));
    } else {
        movies = randomItems(5, Object.keys(ig_movie_map_with_taglines));
    }

    questions = [];
    answers = [];
    for (const movie of movies) {
       var category = randomItem(ig_movie_map[movie]['categories']);
        var random_tagline = randomItem(ig_movie_map[movie]['taglines']);
        var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?';
        var answer = movie;

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

var ig_movie_map_with_taglines = getMapWithTaglines(ig_movie_map);
var movies = randomItems(5, Object.keys(ig_movie_map_with_taglines));

questions = [];
answers = [];
for (const movie of movies) {
    var category = randomItem(ig_movie_map[movie]['categories']);
    var random_tagline = randomItem(ig_movie_map[movie]['taglines']);
    var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?';
    var answer = movie;

    questions.push(question);
    answers.push(answer);
}
