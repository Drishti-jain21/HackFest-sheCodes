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

    output = round(prediction[0], 2)
    if(output==1):
        return render_template('html/offcampus.html', prediction_text='Congratulations! you will be placed ')
    if(output==0):
        return render_template('html/offcampus.html', prediction_text='keep up the hardwork! Placement chances are low ')
    
if __name__ == '__main__':
    app.run(debug=True)

@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)




