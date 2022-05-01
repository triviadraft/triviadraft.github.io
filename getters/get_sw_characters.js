function reset() { 
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
