# CS 171

## Homework 2
### Answers

#### Question 0.1

Each set of vertical and horizontal positions does not necessarily mean anything by itself but together, the relative positions tells us the strength of the relationships between points. Datasets on location of specific physical sites or on the relationship between areas in the brain can be presented with this layout. 

#### Question 0.2

<ul>
<li>Shape of the nodes</li>
<li>Value (light to dark) of the nodes</li>
<li>Orientation (arrow direction) of the links</li>
<li>Texture of the links</li>
<li>Thickness of the links</li>
</ul>

#### Question 0.3

All the previously mentioned visual variables are independent. For example, if I change the shape of a node, the value of the node does not need to change. (However, color and value are not entirely separable.)

#### Question 1.1

Relative ranking (equal-distance) allows readers to clearly read all country names and compare each country "relatively" against others. However, it does not give us a sense of magnitude of a country's attribute compared to those of others. 

Absolute ranking presents readers a general pattern of that attribute across countries. For example, for population, we can clearly see by the distance between the nodes the immense quantity of people residing in China and India compared to the rest of the world. However, we cannot not compare the smaller nations because they are all stacked on top of each other. 

#### Question 1.2

Quantitative data is best displayed with scatter plots, for example, any relationship between two quantitative variables, such as total exports and imports of a country. Categorial data may not be well-suited for scatter plots. For example, plotting type of top against type of bottoms does not give readers additional information with the position of the points. 

#### Question 2.1

D3 layouts transforms raw data to new data that allows us to more easily implement visual ideas. For instance, once defined the pie layout created a new function "pie" that gives the ability to manipulate the data and calculate new values, such as angles. A disadvantage may be that we would have to work within this framework and perhaps may be limited by the fixed number of functions.

#### Question 3.1

<ul>
<li>Have the names of the linked countries appear by the side of the circle in a list, instead of on top of the node. (The name of the country should still appear over the node on mouseover.) Relative information about these countries or the connection between these countries and the selected country can also be shown on the side.</li>
<li>Allow the user to select the countries he/she wants to explore. When the user clicks on a node, any link connected to that node will disappear and the node will move out of the circle and to the side (with accompanied text now visible). The nodes can dynamically resize, but keeping the radius of the big circle the same. The user can also add the countries on the side back into the big circle. There should also be a reset button.</li>
<li>One way to make sure all names of countries can be read is to rotate them (as I have done in my implementation (connect.html). I also placed the name of the selected country in the center of the big circle so that readers can tell immediately. </li>
</ul>

