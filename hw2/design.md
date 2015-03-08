# CS 171

## Homework 2
### Design Documentation

For Implementations 1-3, I have separately placed the code in "1_graph.html", "2_scatter.html", and "3_connect.html". 

#### Design Studio 1

##### PART I - Analysis/Brainstorming

Potential Users:
- general public
- economists
- traders/investors

Potential Tasks
- What is the pattern between exports and imports (and relationship with exchange rate)?
- Has distance of trade increased over the years? (Because of technology?)
- Which country has drastically changed? (Become very involved in international trade or the other way around?)

Other Points to Consider
- Differentiation between near/far
- Scaled by population

##### PART II - Sketching

See "design" folder.

##### PART III - Reflection

I was having trouble trying to find a way to show the change in "weighted" distance (by total exports) over time using nodes and links. I initially was thinking of using the average of all weighted distance of a country's top export partners as the link distance. However, this method does not really utilize the features of the force layout. 

My discussion partners suggested that perhaps instead of using a force layout, I should implement an interactive line graph with the derived data. I really liked this idea. If I were to improve on my visualization, I would definitely add such a feature. However, because I wanted to use data dealing with distance, I first aimed to represent distance directly (such as in the form of the length of a link) since readers hopefully will make the intuitive connection.

#### Explanation of my Visualization: Bringing the World Closer

##### Selecting a Country

You can select a country by clicking on a node directly in initial force layout. Or you can first sorting them by GDP, Population or Alphabetical Order, which can help you find a country or explore country with specific traits, such as a high population. 

(Nodes are also colored by continent.)

##### Nodes and Links

Once you have selected a country, you should see a new force layout with the selected country in the center with links connecting it to other nodes. These peripheral nodes are countries who have the selected country as one of their top ten partners. The size of these nodes represent the amount of export to the selected country. (The tool-tip shows the actual number.) You can click another node and the force layout will change accordingly.

If the selected country is not a top ten partner of any other country, then a message will show up, telling users to "reset."

##### Link Distance

Link distance is by default set on "not weighted", meaning that the distance represent the scaled down distance between the selected country and the partner. (Physical distance is calculated using longitude and latitude.) If "weighted by export amount" is selected, then the link distance change depending on the size of the export and the physical distance; the larger the export amount, the shorter the link distance becomes. 

Since trade brings countries closer, I wanted to represent that change in link distance.

##### Time Update

By changing the years, we can see whether or not the world has become "smaller" through international trade.

If I were to improve on this visualization, I would change the domain of the linear scale to the minimum and maximum "distances" across the years so you can compare the distances across the years. Currently, everything updates by year, but you can see what countries/continents have been pulled closer or pushed farther away. 

###### Thank you!
