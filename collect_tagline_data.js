var movie = random_item(Object.keys(tagline_map));
var category = random_item(movie_map[movie]['categories'].split(","))
var random_tagline = random_item(tagline_map[movie])

var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?'
var answer = movie + '(' + movie_map[movie]['year'] + ')'
