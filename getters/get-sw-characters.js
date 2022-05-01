function reset() { 
    var characters = randomItems(5, Object.keys(swCharacterMap));

    questions = [];
    answers = [];
    for (const character of characters) {
        var questionTypes = [];
        var homeworld = swCharacterMap[character]['homeworld'];
        var species = swCharacterMap[character]['species'];
        var actor = swCharacterMap[character]['actor'];
        if (homeworld) {
            questionTypes.push('homeworld');
        }
        if (species && !species.startsWith('Human')) {
            questionTypes.push('species');
        }
        if (actor) {
            questionTypes.push('actor');
        }
        var questionType = randomItem(questionTypes);

        if (questionType == 'homeworld') {
            var question = 'What is the homeworld of ' + character + '?';
            var answer = homeworld;
        } else if (questionType == 'species') {
            if (species.includes('droid')) {
                var question = character + ' is what droid model?';
            } else {
                var question = character + ' is what species?';
            }
            var answer = species;
        } else if (questionType == 'actor') {
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
