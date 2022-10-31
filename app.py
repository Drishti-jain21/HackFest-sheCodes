# on campus and offcampus prediction 
import pandas as pd
import numpy as np
import pickle 
from db import *

from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
# model = pickle.load(open('weights\\decisiontree.pkl.pkl', 'rb'))
with open("weights\\decisiontree.pkl", 'rb') as f:
    model1=pickle.load(f)

with open("weights\\svm.pkl", 'rb') as f:
    model2=pickle.load(f)

with open("weights\\randomForest.pkl", 'rb') as f:
    model3=pickle.load(f)

with open("weights\\xboost.pkl", 'rb') as f:
    model4=pickle.load(f)

user_data=[]

# @app.route('/')
# def home():
#     return render_template('index.html')

@app.route('/offcampus')
def offcampus():
    return render_template("offcampus.html")

@app.route('/offcampus',methods=["GET","POST"])

def predict():
    if request.method == "POST":
        lqr=request.form.get("logic")
    # return render_template("offcampus.html")

@app.route('/oncampus')
def oncampus():
    return render_template("oncampus.html")

@app.route('/oncampus',methods=["GET","POST"])
def predict():
    pass
    return render_template("oncampus.html")

@app.route('/resumeParser',methods=['POST'])
def resumeParser():
    pass

if __name__ == '__main__':
    app.run(debug=True)

