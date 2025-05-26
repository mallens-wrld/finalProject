from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# List of games
GAMES = [ {
    "name": "Coin Game", 
    "route": "coinGame", 
    "description": "A simple coin game where you can win or lose coins."
    },
    {
    "name": "Test Game",
    "route": "testGame", 
    "description": "A test game for demonstration purposes."}
]
 


@app.route('/')
def index():
    return render_template('index.html', games=GAMES)

@app.route('/coinGame')
def coin_game():

    return render_template('coinGame.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

