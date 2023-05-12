import os
import openai
import dotenv
from IPython.display import display, HTML

from app.prompts import system_prompt
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv())

openai.api_key = os.getenv("OPENAI_API_KEY")
os.environ['REQUESTS_CA_BUNDLE'] = '/Users/eagwu/Projects/Perso/LLM/caadmin.netskope.com.cer'


def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]

def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature,
    )
    return response.choices[0].message["content"]

system_message = {'role':'system', 'content': system_prompt}

age = 24
weight = 63
height = 178
sex = "man"
city = "Paris"
goal = "be athletic"
ideal_weight = 70
place = "at home"
train_freq = 3
level = "intermediate"
duration = 90
intensity = 3
discipline = 3

user_prompt = f"""I am {age} years old and i weight {weight}kg and my height is {height} cm. \
    I'm a {sex} and I live in {city} \
    My goal is to {goal}. I would love to weight {ideal_weight}kg. \
    I will exercise mainly {place} .\
    I can can manage to train {train_freq} times a week. I am at {level} level. \
    Each time I train I can spend {duration} minutes. \
    On a scale of 1 to 5 I want each session to be intense at {intensity}
    On a scale of 1 to 5 I judge my discipline is at {discipline}
"""

#The main function returns the response from the get_completion_from_messages function
def main():
    response = get_completion_from_messages(context, temperature=1)
    print(response)
    return response

context = [system_message]
context.append({'role':'user', 'content': user_prompt})

if __name__ == '__main__':
    main()
