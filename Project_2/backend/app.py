from flask import Flask, jsonify
from key_pg import key
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, inspect, func


rds_connection_string = (f"postgres:{key}@localhost:5432/Project_2")
engine = create_engine(f'postgresql://{rds_connection_string}')



app = Flask(__name__)

@app.route("/")
def welcome():
    return (
        f"/beers"
    )

@app.route("/beers")
def index():
    data = pd.read_sql_query('select lat, long from brewery', con=engine)
    lat = [float(n) for n in data["lat"]]
    longitude = [float(n) for n in data["long"]]
    return jsonify(
        {"lat" : lat,
        "long": longitude})


@app.route("/information")
def info():
    data = pd.read_sql_query('select name, address, city, province from brewery', con=engine)
    name = [(n)for n in data["name"]]
    address = [(n)for n in data["address"]]
    city = [(n)for n in data["city"]]
    province = [(n)for n in data["province"]]
    return jsonify(
        {"name" : name,
        "address": address,
        "city":city,
        "province" : province})



@app.route("/alldata")
def data():
    data = pd.read_sql_query('select lat, long, name, address, city, province from brewery', con=engine)
    lat = [float(n) for n in data["lat"]]
    longitude = [float(n) for n in data["long"]]
    name = [(n)for n in data["name"]]
    address = [(n)for n in data["address"]]
    city = [(n)for n in data["city"]]
    province = [(n)for n in data["province"]]
    return jsonify(
        {"lat" : lat,
        "long": longitude,
        "name" : name,
        "address": address,
        "city":city,
        "province" : province})



# @app.route("/api/beer")
# def beer():
#     y = []
#     for i, row in df.iterrows():
#         latitude=df['lat']
#         y.append(latitude)
#     # longitude=new_beer_df['long']
#     # long.append(longitude)
#     data = [{
#         "y": y,
#     }]

#     print(data)
    
#     return jsonify(data)
if __name__ == '__main__':
    app.run()