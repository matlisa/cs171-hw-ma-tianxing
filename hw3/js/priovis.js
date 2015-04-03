/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 1/28/15.
 */


/*
 *
 * ======================================================
 * We follow the vis template of init - wrangle - update
 * ======================================================
 *
 * */

/**
 * PrioVis object for HW3 of CS171
 * @param _parentElement -- the HTML or SVG element (D3 node) to which to attach the vis
 * @param _data -- the data array
 * @param _metaData -- the meta-data / data description object
 * @constructor
 */
PrioVis = function(_parentElement, _data, _metaData){
    this.parentElement = _parentElement;
    this.data = _data;
    this.metaData = _metaData;
    this.displayData = [];

    // TODO: define all constants here
    this.margin = {top: 20, right: 20, bottom: 30, left: 0},
    this.width = getInnerWidth(this.parentElement) - this.margin.left - this.margin.right,
    this.height = 150 - this.margin.top - this.margin.bottom;

    this.initVis();
}

/**
 * Method that sets up the SVG and the variables
 */
PrioVis.prototype.initVis = function(){

    var that = this;

    //TODO: construct or select SVG
    this.svg = this.parentElement.append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    // creates axis and scales
    this.x = d3.scale.linear()
      .range([0, this.width-100]);

    this.y = d3.scale.linear()
      .range([this.height, 0]);

    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .orient("bottom");

    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .orient("left");

    // Add axes visual elements
    this.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(100," + this.height + ")")

    this.svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(100,0)")

    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
PrioVis.prototype.wrangleData= function(_filterFunction, start, end){
    
    // displayData should hold the data which is visualized
    this.displayData = this.filterAndAggregate(_filterFunction, start, end);

    //// you might be able to pass some options,
    //// if you don't pass options -- set the default options
    //// the default is: var options = {filter: function(){return true;} }
    //var options = _options || {filter: function(){return true;}};

}



/**
 * the drawing function - should use the D3 selection, enter, exit
 */
PrioVis.prototype.updateVis = function(){
    // Dear JS hipster,
    // you might be able to pass some options as parameter _option
    // But it's not needed to solve the task.
    // var options = _options || {};

    // TODO: implement...
    // TODO: ...update scales
    // TODO: ...update graphs

    var that = this;
    // TODO: implement update graphs (D3: update, enter, exit)
    this.x.domain([1, 17])
    
    this.y.domain(d3.extent(this.displayData, function(d,i) { return d; }));
	
    // updates axis
    this.svg.select(".x.axis")
        .call(this.xAxis);

    this.svg.select(".y.axis")
        .call(this.yAxis)

    // updates graph

    var rect = this.svg.selectAll(".rect")
        .data(this.displayData);
    rect.enter()
        .append("rect")
        .attr("class", "rect");
    rect.transition(3000)
        .attr("width", (that.width-100)/16)
        .attr("height", function(d) { return d ==0 ? 0 : (that.height - that.y(d));})
        .attr("x", function(d, i) { return that.x(i+1)+100; })
        .attr("y", function(d) { return that.y(d);})
        .attr("fill", function(d, i) { return that.metaData["priorities"][i]["item-color"];})

/*
    var rows = this.svg.append("g")
        .selectAll("g.row")
        .data([this.displayData])
        
    rows.enter()
        .append("g")
        .attr("class", "row")
 
    var bars = rows
        .append("rect")
        .attr("class", "background")
        .attr("width", function(d) { return that.x(d);})
        .attr("height", 5)
        .attr("x", 0)
        .attr("y", function(d, i) { return (5+2)*i; })
        .attr("fill", "red")
        //.append("title").text(function(d) { return (gdpformat(prefix.scale(d[year].val))+prefix.symbol); });

    /*rows.append("text")
        .attr("x", function(d) { return (xScale(min) - 20); })
        .attr("y", function(d, i) { return (bar_height+2)*i; })
        .attr("text-anchor", "end")
        .attr("dx", 3)
        .attr("dy", "0.65em")
        .text(function(d) { 
            if (d[year].name == null) {
                return d[year].continent; 
            }
            else {
                return d[year].name;
            }})
        .attr("fill",function(d) { 
            if (d[year].val == null) {
                return "#d3d3d3";
            }
        }) */
    rect.exit().remove();
}


/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
PrioVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){
    
    // TODO: call wrangle function
    this.wrangleData(filterdates, selectionStart, selectionEnd);
    //console.log(this.displayData)
    this.updateVis();


}


/*
*
* ==================================
* From here on only HELPER functions
* ==================================
*
* */



/**
 * The aggregate function that creates the counts for each age for a given filter.
 * @param _filter - A filter can be, e.g.,  a function that is only true for data of a given time range
 * @returns {Array|*}
 */
PrioVis.prototype.filterAndAggregate = function(_filter, start, end){
    
    // Set filter to a function that accepts all items
    // ONLY if the parameter _filter is NOT null use this parameter
    var filter = function(){return true;}
    if (_filter != null){
        filter = _filter;
    }
    //Dear JS hipster, a more hip variant of this construct would be:
    // var filter = _filter || function(){return true;}
    
    var that = this;

    // create an array of values for age 0-100
    var priorities = d3.range(16).map(function () {
        return 0;
    });

    var filtered = this.data.filter(function(d, i) {
        return (d.time >= start && d.time <= end);
    });



    filtered.forEach(function(d, i) { d.prios.map(function(dd, j) {
        priorities[j] = priorities[j] + dd;
        });
    });


    // accumulate all values that fulfill the filter criterion
    /*this.data
      .filter(function(d) { 
        var filtered = filter(that.data, start, end);
        return filtered; })
      .forEach(function(d, i) { d.ages.map(function(dd, j) {
        console.log(dd)
        res[j] = res[j] + dd;
        });
      });*/
    // TODO: implement the function that filters the data and sums the values
    
    return priorities;

}