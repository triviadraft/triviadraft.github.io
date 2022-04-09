function displayAnswer() { 
	document.getElementById('answer').innerHTML = answer
	document.getElementById('answer1').innerHTML = answer1
	document.getElementById('answer2').innerHTML = answer2
	document.getElementById('answer3').innerHTML = answer3
}

function reset() { 
	var movie = random_item(Object.keys(actors_map));
    var category = movies_map[movie]['categories']
    var actor_list = actors_map[movie]['supporting']
    var random_list = random_items(3, actor_list)

    var actor1 = random_list[0]['actor']
    var actor2 = random_list[1]['actor']
    var actor3 = random_list[2]['actor']
    var name1 = random_list[0]['name']
    if (random_list[0]['description']) {
        name1 += ' (' + random_list[0]['description'] + ')'
    }
    var name2 = random_list[1]['name']
    if (random_list[1]['description']) {
        name2 += ' (' + random_list[1]['description'] + ')'
    }
    var name3 = random_list[2]['name']
    if (random_list[2]['description']) {
        name3 += ' (' + random_list[2]['description'] + ')'
    }

    question = 'What ' + category + ' film includes ' + actor1 +', ' + actor2 + ', and ' + actor3 + '?';
    answer = movie + ':';
    answer1 = actor1 + ' as ' + name1;
	answer2 = actor2 + ' as ' + name2;
	answer3 = actor3 + ' as ' + name3;
	
	document.getElementById('question').innerHTML = question
	document.getElementById('answer').innerHTML = ''
	document.getElementById('answer1').innerHTML = ''
	document.getElementById('answer2').innerHTML = ''
	document.getElementById('answer3').innerHTML = ''
}
