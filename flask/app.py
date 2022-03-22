from flask import Flask
from flask import render_template
import os


app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True,port=5001)  #in virtualenvy
