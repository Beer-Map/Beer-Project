# Beer-Project
The purpose of this project was to map brewery locations across the USA. 

# Process
1. We started with a large data set that included the location, address, name, and additional information about each brewery. 
2. Cleaned the data set to include the relevant date in Jupyter Notebook using Pyhton and Pandas
3. Created a relational database in pgAdmin using SQL connecting via SQLalchemy
4. Used a flask app to connect our database to the web and jsonify our data for the map
5. The maps were created using HTML, JS, CSS, and Mapbox

# Tools

Jupyter Notebook, Pandas, SQL, Python, Flask App, Mapbox, Javascript, JSON, CSS

# Results
We created 3 different maps to visualize the location of breweries across the US.

1. Standard Marker
![image](https://user-images.githubusercontent.com/73977286/131582588-f258a7d0-6fc2-4e3b-bc47-97bfb60f2d64.png)

2. Heat Map

![image](https://user-images.githubusercontent.com/73977286/131582667-b5ebc35d-2622-40ff-91f9-ed3ed9116c04.png)

3. Cluster Map

![image](https://user-images.githubusercontent.com/73977286/131582730-b07ad99d-83cf-4d8e-a8a6-fc81ba6e6068.png)


We found that the best visualization for this data was the cluster map. The large amount of data that the flask app and mapbox had to run through made the Marker and Heat map extremely slow but also not appealing to the eye. The cluster map allows you to focus on a specific location and see the detail for each brewery. 
