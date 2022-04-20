function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];   
}

var movie = randomItem(Object.keys(tagline_map));
var category = randomItem(movie_map[movie]['categories'].split(","))
var random_tagline = randomItem(tagline_map[movie])

var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?'
var answer = movie + ' (' + movie_map[movie]['year'] + ')'
