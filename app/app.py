import os
from flask import Flask, render_template, render_template_string, request, session, send_file
from dotenv import load_dotenv, find_dotenv
from weasyprint import HTML, CSS

from coachbot import CoachBot
from config import gymplan_header, gymplan_tail, gymplan_tail_no_pdf

load_dotenv(find_dotenv())

app = Flask(__name__)
app.secret_key = 'supersecretkey'

chatbot = CoachBot()
local_path = os.getcwd()

@app.route("/")
def index():
    return render_template("index2.html")


@app.route("/generate_gymplan", methods=["POST"])
def generate_gymplan():
    name = request.form.get("name")
    age = request.form.get("age")
    weight = request.form.get("weight")
    height = request.form.get("height")
    sex = request.form.get("sex")
    city = request.form.get("city")
    goal = request.form.get("goal")
    ideal_weight = request.form.get("ideal_weight")
    place = request.form.get("place")
    train_freq = request.form.get("train_freq")
    level = request.form.get("level")
    duration = request.form.get("duration")
    intensity = request.form.get("intensity")
    discipline = request.form.get("discipline")

    user_prompt = f""" Hello Coach! My name is {name}.\
    I am {age} years old and i weight {weight}kg and my height is {height} cm. \
    I'm a {sex} and I live in {city} \
    My goal is to {goal}. I would love to weight {ideal_weight}kg. \
    I will exercise mainly {place} .\
    I can can manage to train {train_freq} times a week. I am at {level} level. \
    Each time I train I can spend {duration} minutes. \
    On a scale of 1 to 5 I want each session to be intense at {intensity}
    On a scale of 1 to 5 I judge my discipline is at {discipline}
    """

    session['response'] = chatbot.get_response(user_prompt)

    return render_template_string(gymplan_header + session['response'] + gymplan_tail)

@app.route("/download_pdf", methods=["POST"])
def download_pdf():
    response = session['response']
    filename = 'gymplan.pdf'
    file_path = os.path.join(local_path, filename)

    print(response)

    # Render the gymplan2pdf.html template with the given response
    rendered_html = render_template_string(gymplan_header + session['response'] + gymplan_tail_no_pdf)

    # Create a CSS stylesheet to style the PDF
    css_path = os.path.join(local_path, 'app/static', 'css/gymplan_style.css')
    with open(css_path) as f:
        css = CSS(string=f.read())

    
    # Generate the PDF from the rendered HTML
    HTML(string=rendered_html).write_pdf(target=file_path, stylesheets=[css])
    return send_file(file_path, as_attachment=True)


if __name__ == '__main__':
    app.run()
