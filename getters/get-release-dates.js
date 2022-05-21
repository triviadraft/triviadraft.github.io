function reset() { 
    var years = randomItems(5, Object.keys(releaseDateMap));

    questions = [];
    answers = [];
    for (const year of years) {
        var adjustedYear = year;
        var questionTypes = ['exact'];
        if (parseInt(year) < 1970) {
            questionTypes.push('newer')
        }
        var questionType = randomItem(questionTypes);
        if (questionType == 'newer') {
            adjustedYear = (parseInt(year) + 51).toString();
        }

        var movieList = releaseDateMap[adjustedYear];
        var randomList = randomItems(3, movieList);

        var movie1 = randomList[0];
        var movie2 = randomList[1];
        var movie3 = randomList[2];
        var question = '';

        question += 'In what year were ' + movie1 + ', ' + movie2 + ', and ' + movie3 + ' released?';
        var answer = adjustedYear;

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
