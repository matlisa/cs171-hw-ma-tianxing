# Answers for Questions

## Part I: Analysis
Audience:
- Leaders/policy-makers
- General public
- Investors

Questions/Tasks:
- How one priority changed over time
- Which priorities moved together over time
- How does the distribution of counts relate to the distribution of education? (like "agevis")
- Compare to average and/or compare two selections
- BAR CHART: instead of counts, use proportions (compare to overall average proportions)
- SCATTER PLOT: different selections on different axes (same variable)

### Q5a
**Question:** Choose __one__ comparison scenario and create at least three alternative designs that would allow this comparison.

-
**Answer:**

See sketches in [designStudio/](designStudio/).

Plan A: Line graph of the change in counts/proportions over the selected time interval compared to the average.

Plan B: Bar graph that sets the average daily counts/proportions at y = 0. 
The height of the bars signify magnitude of difference between overall average and the selection's average and the position (below or above the x-axis) represent the sign of difference.

Plan C: Two overlapping bar graphs. 
The one in the background displays overall averages; the one in the front displays the selection's averages.

### Q5b
**Question:** Implement one design in your visualization for **PrioVis** and explain why you have chosen this design.

-
**Answer:**

I chose to implement Plan C because it illustrates really clearly interesting statistical properties, especially the central limit theorem, while displaying the comparisons. As we increase our selection interval, or sample size, the distribution of the priorities become closer and closer to the averages. Although Plan B would have also demonstrated this phenomenon, in Plan A, you can visibly observe the two distributions move closer. 

I also wanted to observe all 16 priorities in one visualization window. Although I like the idea of Plan A, having all 16 priorities in one graph, in other words 32 lines, would have been too cluttered and would not have helped me observe patterns among all 16 efficiently. Plan A would be a great addition, as a follow-up visualization after Plan C.

### Q5c
**Question:** As a very minimal case study submit a screenshot of an interesting pattern which you have found with your method and briefly describe the pattern.

-
**Answer:**
![Trial](https://github.com/matlisa/cs171-hw-ma-tianxing/blob/master/hw3/img/Start.png)
