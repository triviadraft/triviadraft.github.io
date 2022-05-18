import base64
import csv
import json
import random

# set some variable equal to some JSON
def set_json_variable(filepath, content, var_name):
    with open(filepath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(content)
    with open(filepath) as f:
        lines = f.readlines()
        lines[0] = 'var ' + var_name + " = " + lines[0]
    with open(filepath, 'w') as f:
        f.writelines(lines)

# set MTS variable equal to some encrypted content string
def set_mts_variable(filepath, content):
    dataBytes = json.dumps(content).encode("utf-8")
    encoded = base64.b64encode(dataBytes)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(encoded)[1:])

    with open(filepath) as f:
        lines = f.readlines()
        lines[0] = 'var encryptedMtsMap = ' + lines[0] + ';\n'
        lines.append('var decodedMtsMap = atob(encryptedMtsMap);\n')
        lines.append('var mtsQuestionMap = JSON.parse(decodedMtsMap);')
    with open(filepath, 'w') as f:
        f.writelines(lines)

def generate_jsons():
    # movie data
    movie_dict = {}
    for doc in [r'python/csv/Classics - Movies.csv',
                r'python/csv/1970s - Movies.csv',
                r'python/csv/1980s - Movies.csv',
                r'python/csv/1990s - Movies.csv',
                r'python/csv/2000s - Movies.csv',
                r'python/csv/2010s - Movies.csv',
                r'python/csv/2020s - Movies.csv']:
        with open(doc, encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                movie = row['Title'] + ' (' + row['Release'][-4:] + ')'
                year = row['Release'][-4:]
                single_movie_dict = {
                    'title': row['Title'],
                    'year': row['Release'][-4:],
                    'synopsis': row['Synopsis'],
                    'directors': row['Directed By'].split(',\n'),
                    'leads': row['Lead Actors'].split(',\n'),
                    'music': row['Music By'].split(',\n'),
                    'categories': []
                }
                movie_dict[movie] = single_movie_dict

    for movie in movie_dict:
        year = int(movie_dict[movie]['year'])
        if year >= 1950 and year <= 1959:
            movie_dict[movie]['categories'].append('1950s')
        elif year >= 1960 and year <= 1969:
            movie_dict[movie]['categories'].append('1960s')
        elif year >= 1970 and year <= 1979:
            movie_dict[movie]['categories'].append('1970s')
        elif year >= 1980 and year <= 1989:
            movie_dict[movie]['categories'].append('1980s')
        elif year >= 1990 and year <= 1999:
            movie_dict[movie]['categories'].append('1990s')
        elif year >= 2000 and year <= 2009:
            movie_dict[movie]['categories'].append('2000s')
        elif year >= 2010 and year <= 2019:
            movie_dict[movie]['categories'].append('2010s')
        elif year >= 2020 and year <= 2029:
            movie_dict[movie]['categories'].append('2020s')

    for category in ['A24', 'Action/Adventure', 'Al Pacino', 'Alfred Hitchcock', 'Alien & Predator', 'Amblin', 'Amy Adams', 'Andersons', 'Animated', 'Anne Hathaway', 'Antonio Banderas', 'Barbra Streisand', 'Barrymore Family', 'Batman', 'Bill Murray', 'Biopics', 'Black Cinema', 'Brad Pitt & George Clooney', 'Brat Pack', 'Bruce Willis', 'Cate Blanchett', 'Charlize Theron', 'Christopher Nolan']:
        file_prefix = category.replace('/', '_')
        with open('python/csv/' + file_prefix + ' - Movies.csv', encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                movie = row['Title'] + ' (' + row['Release'][-4:] + ')'
                movie_dict[movie]['categories'].append(category)

    for movie in movie_dict:
        year = int(movie_dict[movie]['year'])
        if year >= 1920 and year <= 1969:
            movie_dict[movie]['categories'].append('Classics')

    for category in ['Clint Eastwood', 'Coen Brothers', 'Comedies', 'Comic Book', 'Coming of Age', 'Coppolas', 'Cornetto Trio', 'Courtroom Dramas & Legal Thrillers', 'Crime', 'Cusacks', 'Dance', 'David Fincher', 'David Lynch', 'DC', 'Denzel Washington', 'Disney', 'Douglases', 'Dramas', 'DreamWorks Animation', 'Dwayne Johnson', 'Dystopian Future & Time Travel', 'Eastwoods', 'Ed Harris', 'Eddie Murphy', 'Emily Blunt', 'Emmas', 'Family', 'Fantasy/Sci-Fi', 'Fast & Furious', 'Frances McDormand', 'Frank Capra', 'Frat Pack', 'Gene Hackman', 'Graphic Novels', 'Guillermo del Toro', 'Gyllenhaals', 'Halle Berry', 'Happy Madison & Adam Sandler', 'Harrison Ford', 'Hasbro', 'Hepburns', 'Historical Epics & Dramas', 'Holiday', 'Horror', 'Horror/Thriller', 'Ice Cube', 'IG Animated', 'IG Fantasy/Sci-Fi', 'IG Mixed Bag', 'Jack Nicholson', 'Jackie Chan', 'James Bond', 'James Stewart', 'Jamie Lee Curtis', 'Jennifer Aniston', 'Jennifer Connelly', 'Jennifer Lawrence', 'Jennifer Lopez', 'Jim Carrey', 'Jodie Foster', 'John Candy', 'John Carpenter', 'John Hughes', 'John Singleton', 'Julia Roberts', 'Jurassic Park', 'Keanu Reeves', 'Kevin Hart', 'Kevin Smith', 'Kurt Russell', 'Leonardo DiCaprio', 'LGBTQ Cinema', 'Lucasfilm', 'M. Night Shyamalan', 'Margot Robbie', 'Marshalls', 'Martial Arts', 'Martin Scorsese', 'Marvel', 'Matt & Ben', 'Meg Ryan', 'Mel Brooks', 'Meryl Streep', 'Michael Keaton', 'Michelle Pfeiffer', 'Middle-earth', 'Modern Classics', 'Monster', 'Morgan Freeman', 'Musicals', 'Musicians in Film', 'Mystery', 'Natalie Portman', 'Nicolas Cage', 'Nicole Kidman', 'Nora Ephron', 'Octavia Spencer', 'Paul Newman & Robert Redford', 'Period Pieces & Costume Dramas', 'Pixar', 'Planet of the Apes', 'Queen Latifah', 'Quentin Tarantino & Robert Rodriguez', 'Ramis & Reitmans', 'Rat Pack', 'Reese Witherspoon', 'Reginas', 'Remakes & Reboots', 'Richard Donner', 'Robert De Niro & Joe Pesci', 'Robert Downey Jr.', 'Robert Zemeckis', 'Robin Williams', 'Rocky', 'Rom-Coms', 'Romance', 'Samuel L. Jackson', 'Scarlett Johansson', 'Scotts', 'SCTV Alumni', 'Sean Connery', 'Sheens', 'Sigourney Weaver', 'Sly & Arnie', 'SNL & Lorne Michaels', 'Spider-Man', 'Spike Lee', 'Spoof', 'Sports', 'Spy', 'Stanley Tucci', 'Star Trek', 'Star Wars', 'Stephen King', 'Steven Soderbergh', 'Steven Spielberg', 'Streaming', 'Superman', 'Swashbuckling & Pulp Adventure', 'Teenage Mutant Ninja Turtles', 'Thriller', 'Tim Burton', 'Tom Cruise', 'Tom Hanks', 'Tyler Perry', 'Viola Davis', 'Wachowskis', 'Wayans Family', 'Westerns', 'Whoopi Goldberg', 'Will Smith', 'Wizarding World', 'Wrestlers in Film', 'X-Men', 'Young Adult Adaptations']:
        file_prefix = category.replace('/', '_')
        with open('python/csv/' + file_prefix + ' - Movies.csv', encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                movie = row['Title'] + ' (' + row['Release'][-4:] + ')'
                movie_dict[movie]['categories'].append(category)
    with open(r'python/csv/actordata - casts.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            movie = row['movie']
            if 'cast' not in movie_dict[movie]:
                movie_dict[movie]['cast'] = []

            movie_dict[movie]['cast'].append(row['actor'])

    set_json_variable('setters/set-movies.js', json.dumps(movie_dict, indent=4), 'movieMap')

    # mts questions
    mts_question_dict = {}
    mts_question_dict['questions'] = []
    with open(r'python/csv/MTS History - SG_TM.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            if row['Movies'] != 'N/A' and row['Category'] != 'Box Office':
                single_question_dict = {
                    'question': row['Question'],
                    'answer': row['Answer'],
                    'category': row['Category']
                }
                mts_question_dict['questions'].append(single_question_dict)

    set_mts_variable('setters/set-mts.js', mts_question_dict)

    ig_mts_question_dict = {}
    ig_mts_question_dict['questions'] = []
    with open(r'python/csv/MTS History - IG.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            if row['Movies'] != 'N/A':
                single_question_dict = {
                    'question': row['Question'],
                    'answer': row['Answer'],
                    'category': row['Category']
                }
                ig_mts_question_dict['questions'].append(single_question_dict)

    set_mts_variable('setters/set-ig-mts.js', ig_mts_question_dict)


    # director data
    director_dict = {}
    with open(r'python/csv/Directors - Directors.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['Name']
            director_dict[name] = []
            movie_names = row['Movies'].split('), ')
            for movie_name in movie_names:
                if movie_name.endswith(')'):
                    single_movie_dict = {
                        'movie': movie_name[:-7],
                        'year': movie_name[len(movie_name)-5:len(movie_name)-1],
                    }
                    director_dict[name].append(single_movie_dict)
                else:
                    single_movie_dict = {
                        'movie': movie_name[:-6],
                        'year': movie_name[len(movie_name)-4:len(movie_name)],
                    }
                    director_dict[name].append(single_movie_dict)

    set_json_variable('setters/set-directors.js', json.dumps(director_dict, indent=4), 'directorMap')


    # actor data
    actor_dict = {}
    with open(r'python/csv/Oscars - Actors.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['Name']
            actor_dict[name] = {}
            if row['Lead']:
                actor_dict[name]['leadNoms'] = []

                lead_movie_names = row['Lead'].split('), ')
                for movie_name in lead_movie_names:
                    if movie_name.endswith(')'):
                        lead_movie_dict = {
                            'movie': movie_name[:-7],
                            'year': movie_name[len(movie_name)-5:len(movie_name)-1],
                        }
                        actor_dict[name]['leadNoms'].append(lead_movie_dict)
                    else:
                        lead_movie_dict = {
                            'movie': movie_name[:-6],
                            'year': movie_name[len(movie_name)-4:len(movie_name)],
                        }
                        actor_dict[name]['leadNoms'].append(lead_movie_dict)
            if row['Supporting']:
                actor_dict[name]['suppNoms'] = []

                supp_movie_names = row['Supporting'].split('), ')
                for movie_name in supp_movie_names:
                    if movie_name.endswith(')'):
                        supp_movie_dict = {
                            'movie': movie_name[:-7],
                            'year': movie_name[len(movie_name)-5:len(movie_name)-1],
                        }
                        actor_dict[name]['suppNoms'].append(supp_movie_dict)
                    else:
                        supp_movie_dict = {
                            'movie': movie_name[:-6],
                            'year': movie_name[len(movie_name)-4:len(movie_name)],
                        }
                        actor_dict[name]['suppNoms'].append(supp_movie_dict)

    with open(r'python/csv/actordata - casts.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            actor = row['actor']
            if actor not in actor_dict:
                actor_dict[actor] = {}
            if 'movies' not in actor_dict[actor]:
                actor_dict[actor]['movies'] = []

            actor_dict[actor]['movies'].append(row['movie'])

    set_json_variable('setters/set-actors.js', json.dumps(dict(sorted(actor_dict.items())), indent=4), 'actorMap')


    ################################################################################################
    ##### IG Data ##################################################################################
    ################################################################################################

    # ig movie data
    ig_movie_dict = {}
    with open(r'python/csv/actordata - ig-movies.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']
            title = row['movie'][:-7]
            year = row['release'][-4:]
            franchise = row['franchise']

            single_movie_dict = {
                'title': title,
                'year': year,
                'categories': row['categories'].split(','),
                'franchise': franchise
            }
            ig_movie_dict[movie] = single_movie_dict

    with open(r'python/csv/actordata - ig-taglines.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']

            if not movie.endswith(')'):
                title = title[:-7]
                movie += ' (' + row['release'][-4:] + ')'

            if 'taglines' not in ig_movie_dict[movie]:
                ig_movie_dict[movie]['taglines'] = []

            ig_movie_dict[movie]['taglines'].append(row['tagline'])

    with open(r'python/csv/actordata - ig-casts.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            movie = row['movie']
            cast_level = row['level'] + "Cast"
            if cast_level not in ig_movie_dict[movie]:
                ig_movie_dict[movie][cast_level] = []

            single_actor_dict = {}
            single_actor_dict['actor'] = row['actor']
            single_actor_dict['name'] = row['name']
            single_actor_dict['description'] = row['description']

            ig_movie_dict[movie][cast_level].append(single_actor_dict)

    set_json_variable('setters/set-ig-movies.js', json.dumps(ig_movie_dict, indent=4), 'igMovieMap')


    # ig actor data
    ig_actor_dict = {}

    with open(r'python/csv/actordata - ig-casts.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            if not row['level'] == 'minor':
                actor = row['actor']
                if actor not in ig_actor_dict:
                    ig_actor_dict[actor] = {}
                if 'movies' not in ig_actor_dict[actor]:
                    ig_actor_dict[actor]['movies'] = {}

                movie = row['movie']
                if ig_movie_dict[movie]['franchise']:
                    franchise = ig_movie_dict[movie]['franchise']
                    if franchise not in ig_actor_dict[actor]['movies']:
                        ig_actor_dict[actor]['movies'][franchise] = []
                    ig_actor_dict[actor]['movies'][franchise].append(movie)
                else:
                    ig_actor_dict[actor]['movies'][movie] = [movie]

    set_json_variable('setters/set-ig-actors.js', json.dumps(dict(sorted(ig_actor_dict.items())), indent=4), 'igActorMap')


    ################################################################################################
    ##### SW Data ##################################################################################
    ################################################################################################

    # star wars character data
    sw_character_dict = {}
    with open(r'python/csv/actordata - sw-characters.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['name']
            sw_character_dict[name] = row

    set_json_variable('setters/set-sw-characters.js', json.dumps(sw_character_dict, indent=4), 'swCharacterMap')


generate_jsons()