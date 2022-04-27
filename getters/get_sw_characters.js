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
    characters = randomItems(5, Object.keys(sw_character_map));

    questions = [];
    answers = [];
    for (const character of characters) {
        console.log(character);
        var question_types = [];
        var homeworld = sw_character_map[character]['homeworld'];
        var species = sw_character_map[character]['species'];
        var actor = sw_character_map[character]['actor'];
        if (homeworld) {
            question_types.push('homeworld');
        }
        if (species && !species.startsWith('Human')) {
            question_types.push('species');
        }
        if (actor) {
            question_types.push('actor');
        }
        var question_type = randomItem(question_types);

        if (question_type == 'homeworld') {
            var question = 'What is the homeworld of ' + character + '?';
            var answer = homeworld;
        } else if (question_type == 'species') {
            if (species.includes('droid')) {
                var question = character + ' is what droid model?';
            } else {
                var question = character + ' is what species?';
            }
            var answer = species;
        } else if (question_type == 'actor') {
            var question = 'Who portrays ' + character + '?';
            var answer = actor;
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

var characters = randomItems(5, Object.keys(sw_character_map));

questions = [];
answers = [];
for (const character of characters) {
    var question_types = [];
    var homeworld = sw_character_map[character]['homeworld'];
    var species = sw_character_map[character]['species'];
    var actor = sw_character_map[character]['actor'];
    if (homeworld) {
        question_types.push('homeworld');
    }
    if (species && !species.startsWith('Human')) {
        question_types.push('species');
    }
    if (actor) {
        question_types.push('actor');
    }
    var question_type = randomItem(question_types);

    if (question_type == 'homeworld') {
        var question = 'What is the homeworld of ' + character + '?';
        var answer = homeworld;
    } else if (question_type == 'species') {
        if (species.includes('droid')) {
            var question = character + ' is what droid model?';
        } else {
            var question = character + ' is what species?';
        }
        var answer = species;
    } else if (question_type == 'actor') {
        var question = 'Who portrays ' + character + '?';
        var answer = actor;
    }

    questions.push(question);
    answers.push(answer);
}
