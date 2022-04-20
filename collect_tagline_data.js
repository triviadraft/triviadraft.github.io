function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];   
}

var movie = randomItem(Object.keys(tagline_map));
var category = randomItem(movie_map[movie]['categories'].split(","))
var random_tagline = randomItem(tagline_map[movie])

var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?'
var answer = movie

if (!movie.includes('(1') && !movie.includes('(2')) {
  var year = movie_map[movie]['release'].slice(-4)
  answer += ' (' + year + ')'
}
