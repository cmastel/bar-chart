# bar-chart

This project consists of a library that will help other programmers develop bar charts on their web page. 

## Notes to Reviewers
* I've gotten a decent ways along this stretch project, but am not able to do anymore before my Lighthouse Labs cohort
  starts on October 14. Therefore, please consider this submission as incomplete, but I'm interested in any feedback.
* For the github history, I tried creating a fork with files in a different folder (rewrite1), but there is now an issue
  between what is on github and my local git repository. In the github repository, you can ignore the rewrite1 folder as
  all other files (barchart.html, main.js, assets/stylesheets/main.css) are up-to-date.
* Any feedback is appreciated. Going through this exercise I have definitely learned a better way to approach it 
  from the start that would likely result in a better end-product and cleaner code. 

## Implementation

The bar-chart project consists of the following files that need to be installed in the same folder structure:
* barchart.html
* assets/stylesheets/main.css
* main.js

Simply open the barchart.html file in a browser to see the default state of the chart.

barchart.html creates a barchart on an html page based on data that the user supplies. This data is entered into the main.js
file as the data Object. 

The bar chart will automatically adjust so that the number of bars will evenly fill the space reserved for the chart. 
Additionally, the height of the chart will be filled with the maximum bar value.
The five tick marks on the y-axis are automatically determined based on the range of bar values.

### Options

Within the main.js file, in addition to the data Object which the user can specify the following are the other parameters in the "options" object 
that can be specified:
* chart width
* chart height
* chart background colour
* bar colour
* chart title
* y-Axis title

## Known Issues

* For items with a value of '0', a bar is still present 
* Negative values will cause issues
* gitignore has not been implemented

## Roadmap of Future Features

* Fix Known Issues
* Implement an API to easily have a user input their data and chart preferences
* Further work on Design of the website

## Authors

* **Chris Mastel** - *Initial work* - [cmastel](https://github.com/cmastel)

## References

* Udacity, Intro to jQuery Course (online tutorial)
* Learning jQuery, A Hands-on Guide to Building Rick Interactive Web Front Ends by Ralph Steyer (book)
* JavaScript, The Definitive Guide by David Flanagan (book)
* Multiple posts on [CSS-Tricks](https://www.css-tricks.com) (blog posts)
* Multiple posts on [Stack Overflow](https://www.stackoverflow.com) (public Q & A)
