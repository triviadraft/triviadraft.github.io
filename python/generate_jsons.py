import csv
import json
import random

def create_jsons():
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
                    if ')' in movie_name:
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
                    if ')' in movie_name:
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

    with open(r'python/actor-oscars.json', 'w', encoding='utf-8') as jsonf:
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
                if ')' in movie_name:
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

    with open(r'python/directors.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(director_dict, indent=4))


    # ig movie data
    ig_movie_dict = {}
    with open(r'python/csv/actordata - movies.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']
            ig_movie_dict[movie] = row

    with open(r'python/ig-movies.json', 'w', encoding='utf-8') as jsonf:
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

    with open(r'python/ig-actors.json', 'w', encoding='utf-8') as jsonf:
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

    with open(r'python/taglines.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(tagline_dict, indent=4))


    # star wars character data
    sw_character_dict = {}
    with open(r'python/csv/actordata - sw-characters.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            name = row['name']
            sw_character_dict[name] = row

    with open(r'python/sw-characters.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(sw_character_dict, indent=4))


def generate_questions():
    # create a dictionary
    movie_dict = {}
    with open('python/movies.json') as json_file:
        data = json.load(json_file)
        for movie in data.keys():
            movie_dict[movie] = data[movie]

    questions = []
    with open('python/actors.json') as json_file:
        data = json.load(json_file)

        question_count = 20
        for n in range(question_count):
            movie = random.choice(list(data))
            category = movie_dict[movie]['categories']
            full_list = data[movie]['supporting']
            random_list = random.sample(full_list, k=3)

            actor1 = random_list[0]['actor']
            actor2 = random_list[1]['actor']
            actor3 = random_list[2]['actor']
            name1 = random_list[0]['name']
            name2 = random_list[1]['name']
            name3 = random_list[2]['name']

            question = f'{n+1}. What {category} film includes {actor1}, {actor2}, and {actor3}?'
            answer = f'{n+1}. {movie} as {name1}, {name2}, and {name3}'
            questions.append({
                'question': question,
                'answer': answer
            })

        print(questions)
        fieldnames = ['question', 'answer']
        with open('questions.csv', 'w', encoding='UTF8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(questions)

create_jsons()
