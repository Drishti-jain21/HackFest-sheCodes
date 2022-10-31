# on campus and offcampus prediction 

import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle


app = Flask(__name__)
model = pickle.load(open('weights\decisiontree.pkl', 'rb'))


@app.route('/final/html/offcampus.html')
def home():
    return render_template('html/offcampus.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = []
    for x in request.form.values():
        int_features.append(int(x))
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

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




