from flask import Flask, render_template, request
import random

app = Flask(__name__)

# Seznam otázek a odpovědí
questions = {
    "Kolik je 2 + 2?": "4",
    "Kdo napsal Romeo a Julie?": "Shakespeare",
    "Jak se jmenuje nejvyšší hora na světě?": "Mount Everest",
    # Přidej další otázky a odpovědi podle potřeby
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/play", methods=["POST"])
def play():
    score = 0
    for question, answer in questions.items():
        user_answer = request.form.get(question)
        if user_answer and user_answer.lower() == answer.lower():
            score += 1
    return render_template("result.html", score=score, total=len(questions))

if __name__ == "__main__":
    app.run(debug=True)
