from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# List of games
GAMES = [ {
    "name": "Coin Game 🪙", 
    "route": "coinGame", 
    "description": "A simple coin game where you can win or lose coins."
    },
    {
    "name": "Dice Game 🎲",
    "route": "diceGame",
    "description": "A dice game where you can roll a die and win coins based on the outcome."
    }
]
 


@app.route('/')
def index():
    return render_template('index.html', games=GAMES)

@app.route('/coinGame')
def coin_game():

    return render_template('coinGame.html')

@app.route('/diceGame')
def dice_game():
    return render_template('diceGame.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

