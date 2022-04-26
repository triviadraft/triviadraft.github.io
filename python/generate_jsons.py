import csv
import json
import random

def generate_jsons():
    # movie data
    movie_dict = {}
    with open(r'python/csv/2020s - Movies.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['Title'] + ' (' + row['Release'][-4:] + ')'
            single_movie_dict = {
                'synopsis': row['Synopsis'],
                'directors': row['Directed By'].split(',\n'),
                'leads': row['Lead Actors'].split(',\n'),
                'music': row['Music By'].split(',\n'),
            }
            movie_dict[movie] = single_movie_dict

    with open(r'python/json/movies.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(movie_dict, indent=4))

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