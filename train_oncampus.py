import numpy as np 
import pandas as pd 
import os
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score
from sklearn import preprocessing
from catboost import CatBoostClassifier

df = pd.read_csv("data\on_campus.csv")

pre = preprocessing.LabelEncoder()

df["Gender"] = pre.fit_transform(df["Gender"])
df["Stream"] = pre.fit_transform(df["Stream"])

X = df[['Age', 'Gender', 'Internships', 'CGPA', 'Hostel',
       'HistoryOfBacklogs', 'Stream']]

y = df["PlacedOrNot"]

x_train, x_test, y_train, y_test = train_test_split(X,y, test_size=0.30, random_state=100)

clf = CatBoostClassifier(
    
    iterations = 5, 
    learning_rate = 0.1, 
    loss_function='CrossEntropy',
    
).fit(x_train, y_train)


pred = clf.predict(x_test)
acc = accuracy_score(y_test, pred)
print ("Accuracy is ",acc)

