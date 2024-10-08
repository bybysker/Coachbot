import os
import openai
from dotenv import load_dotenv, find_dotenv
from prompts import context_prompt

load_dotenv(find_dotenv())

class CoachBot:
    def __init__(self):
        self.context = []#{'role':'system', 'content': system_prompt}
        openai.api_key = os.getenv("OPENAI_API_KEY")
        #os.environ['REQUESTS_CA_BUNDLE'] = 'caadmin.netskope.com.cer'

    def get_response(self, user_prompt):
        self.context.append({'role': 'user', 'content': context_prompt + user_prompt})
        response = self.get_completion(self.context)
        return response

    def get_completion(self, context, model="gpt-3.5-turbo", temperature=0):
        response = openai.ChatCompletion.create(
            model=model,
            messages=context,
            temperature=temperature,
        )
        return response.choices[0].message["content"]