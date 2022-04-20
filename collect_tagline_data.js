function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];  
}

function randomItems(n, items) {
    var shuffled = items.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, n)
}

var movies = randomItems(5, Object.keys(tagline_map))

questions = []
answers = []
for (const movie of movies) {
    var category = randomItem(movie_map[movie]['categories'].split(","))
    var random_tagline = randomItem(tagline_map[movie])
    var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?'
    var answer = movie

    if (!movie.includes('(1') && !movie.includes('(2')) {
        var year = movie_map[movie]['release'].slice(-4)
        answer += ' (' + year + ')'
    }

    questions.push(question)
    answers.push(answer)
}

var movie = randomItem(Object.keys(tagline_map))

var category = randomItem(movie_map[movie]['categories'].split(","))
var random_tagline = randomItem(tagline_map[movie])

var question = 'What ' + category + ' film has the tagline "' + random_tagline + '"?'
var answer = movie

if (!movie.includes('(1') && !movie.includes('(2')) {
  var year = movie_map[movie]['release'].slice(-4)
  answer += ' (' + year + ')'
}
