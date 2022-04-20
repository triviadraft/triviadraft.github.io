var movie = random_item(Object.keys(actor_map));
var category = random_item(movie_map[movie]['categories'].split(","));
var actor_list = actor_map[movie]['supporting']
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

var question = 'What ' + category + ' film includes ' + actor1 +', ' + actor2 + ', and ' + actor3 + '?';
var answer = movie + ':';
var answer1 = actor1 + ' as ' + name1;
var answer2 = actor2 + ' as ' + name2;
var answer3 = actor3 + ' as ' + name3;
