import base64
import csv
import json
import random

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

    for category in ['Action/Adventure', 'Alfred Hitchcock', 'Andersons', 'Animated', 'Christopher Nolan']:
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

    for category in ['Clint Eastwood', 'Coen Brothers', 'Comedies', 'Coppolas', 'David Fincher', 'David Lynch', 'Dramas', 'Fantasy/Sci-Fi', 'Frank Capra', 'Guillermo del Toro', 'Horror', 'Horror/Thriller', 'John Carpenter', 'John Hughes', 'John Singleton', 'Modern Classics', 'Rom-Coms', 'Romance', 'Thriller']:
        file_prefix = category.replace('/', '_')
        with open('python/csv/' + file_prefix + ' - Movies.csv', encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                movie = row['Title'] + ' (' + row['Release'][-4:] + ')'
                movie_dict[movie]['categories'].append(category)

    with open(r'python/json/movies.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(movie_dict, indent=4))

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

    dataBytes = json.dumps(mts_question_dict).encode("utf-8")
    encoded = base64.b64encode(dataBytes)
    with open(r'python/json/mts-questions.txt', 'w', encoding='utf-8') as f:
        f.write(str(encoded)[1:])

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

    dataBytes = json.dumps(ig_mts_question_dict).encode("utf-8")
    encoded = base64.b64encode(dataBytes)
    with open(r'python/json/ig-mts-questions.txt', 'w', encoding='utf-8') as f:
        f.write(str(encoded)[1:])

    # oscars data
    actor_oscar_dict = {}
    with open(r'python/csv/Oscars - Actors.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['Name']
            actor_oscar_dict[name] = {}
            if row['Lead']:
                actor_oscar_dict[name]['lead'] = []

                lead_movie_names = row['Lead'].split('), ')
                for movie_name in lead_movie_names:
                    if movie_name.endswith(')'):
                        lead_movie_dict = {
                            'movie': movie_name[:-7],
                            'year': movie_name[len(movie_name)-5:len(movie_name)-1],
                        }
                        actor_oscar_dict[name]['lead'].append(lead_movie_dict)
                    else:
                        lead_movie_dict = {
                            'movie': movie_name[:-6],
                            'year': movie_name[len(movie_name)-4:len(movie_name)],
                        }
                        actor_oscar_dict[name]['lead'].append(lead_movie_dict)
            if row['Supporting']:
                actor_oscar_dict[name]['supporting'] = []

                supp_movie_names = row['Supporting'].split('), ')
                for movie_name in supp_movie_names:
                    if movie_name.endswith(')'):
                        supp_movie_dict = {
                            'movie': movie_name[:-7],
                            'year': movie_name[len(movie_name)-5:len(movie_name)-1],
                        }
                        actor_oscar_dict[name]['supporting'].append(supp_movie_dict)
                    else:
                        supp_movie_dict = {
                            'movie': movie_name[:-6],
                            'year': movie_name[len(movie_name)-4:len(movie_name)],
                        }
                        actor_oscar_dict[name]['supporting'].append(supp_movie_dict)

    with open(r'python/json/actor-oscars.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(actor_oscar_dict, indent=4))


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

    with open(r'python/json/directors.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(director_dict, indent=4))


    # ig movie data
    ig_movie_dict = {}
    with open(r'python/csv/actordata - movies.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']
            single_movie_dict = {
                'year': row['release'][-4:],
                'categories': row['categories']
            }
            ig_movie_dict[movie] = single_movie_dict

    with open(r'python/json/ig-movies.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(ig_movie_dict, indent=4))


    # ig actor data
    ig_actor_dict = {}
    with open(r'python/csv/actordata - actors.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            movie = row['movie']

            if movie not in ig_actor_dict:
                ig_actor_dict[movie] = {}

            level = row['level']
            if level not in ig_actor_dict[movie]:
                ig_actor_dict[movie][level] = []

            single_actor_dict = {}
            single_actor_dict['actor'] = row['actor']
            single_actor_dict['name'] = row['name']
            single_actor_dict['description'] = row['description']

            ig_actor_dict[movie][level].append(single_actor_dict)

    with open(r'python/json/ig-actors.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(ig_actor_dict, indent=4))


    # tagline data
    tagline_dict = {}
    with open(r'python/csv/actordata - taglines.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']

            if movie not in tagline_dict:
                tagline_dict[movie] = []

            tagline_dict[movie].append(row['tagline'])

    with open(r'python/json/ig-taglines.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(tagline_dict, indent=4))


    # star wars character data
    sw_character_dict = {}
    with open(r'python/csv/actordata - sw-characters.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['name']
            sw_character_dict[name] = row

    with open(r'python/json/sw-characters.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(sw_character_dict, indent=4))

generate_jsons()