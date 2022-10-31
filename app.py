# on campus and offcampus prediction 

import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open('weights\\decisiontree.pkl.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/offcampus')
def offcampus():
    pass
@app.route('/oncampus')
def oncampus():
    pass
@app.route('/resumeParser')
def resumeParser():
    pass

if __name__ == '__main__':
    app.run(debug=True)

