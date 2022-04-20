import csv
import json
import random

def create_jsons():
    # movie data
    movie_dict = {}

    with open(r'actordata - movies.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']
            movie_dict[movie] = row

    with open(r'movies.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(movie_dict, indent=4))


    # actor data
    actor_dict = {}

    with open(r'actordata - actors.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        for row in csvReader:
            movie = row['movie']

            if movie not in actor_dict:
                actor_dict[movie] = {}

            level = row['level']
            if level not in actor_dict[movie]:
                actor_dict[movie][level] = []

            single_actor_dict = {}
            single_actor_dict['actor'] = row['actor']
            single_actor_dict['name'] = row['name']
            single_actor_dict['description'] = row['description']

            actor_dict[movie][level].append(single_actor_dict)

    with open(r'actors.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(actor_dict, indent=4))

    # tagline data
    tagline_dict = {}
    with open(r'actordata - taglines.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            movie = row['movie']

            if movie not in tagline_dict:
                tagline_dict[movie] = []

            tagline_dict[movie].append(row['tagline'])

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(r'taglines.json', 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(tagline_dict, indent=4))

def generate_questions():
    # create a dictionary
    movie_dict = {}
    with open('movies.json') as json_file:
        data = json.load(json_file)
        for movie in data.keys():
            movie_dict[movie] = data[movie]

    questions = []
    with open('actors.json') as json_file:
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
