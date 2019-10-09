function drawBarChart(data, options, element) {
  $(document).ready(function(){
    
    // extract info from data to determine chart size
    let dataKeys = Object.keys(data);
    let largestValue = objectMax(dataKeys, data);

    chartStructure(largestValue, dataKeys, options, element);
    defineBars(largestValue, dataKeys, options, data, element);
    tickMarks(largestValue, element);

  }); // end of $(document).ready

} // end of function drawBarChart

function objectMax(keys, dataObject) {
  // loop through dataObject to get the maximum value
  // uses the keys array to loop through the object, and access
  // the values based on the keys
  let max = 0;
  for (let x = 0; x < keys.length; x++) {
    if (dataObject[keys[x]] > max) {
      max = dataObject[keys[x]];
    }
  } 
  return max;
} // end of function objectMax

function chartStructure(maxValue, xLabels, options, element) {
  // set the number of rows and columns in the CSS Grid
  $(element).css('grid-template-columns', (xLabels + 2) + ', 1fr');
  $(element).css('grid-template-rows', 'repeat(' + (maxValue + 2) + ', 1fr');
  
  // set the titles
  chartTitle.innerText = options['chart-title'];
  $('#chartTitle').css('grid-area', '1 / 1 / 2 / ' + (xLabels.length + 2));
  $('<div class="yAxisTitle">' + options['yAxisTitle'] + '</div>').appendTo(element);
  $('.yAxisTitle').css('grid-row-start', '2');
  $('.yAxisTitle').css('grid-row-end', (maxValue + 2));
  $('.yAxisTitle').css('grid-column', '1 / 2');

  // set the overall chart structure
  $(element).css('width', options['width']);
  $(element).css('height', options['height']);
  $(element).css('background-color', options['background-color']);

} // end of function chartStructure

function defineBars(maxValue, xLabels, options, data, element) {
  let totalRows = maxValue + 2; // define the total number of rows in .chart grid

  // loop through the number of items in xLabels array, which corresponds to
  // the number of "bars" in the chart
  for (let i = 0; i < xLabels.length; i++) {
    let bar = '.bar-' + (i + 1);
    let label = '.label-' + (i + 1);
    let key = xLabels[i];

    // create a class for each label, position at the bottom of each bar,
    // and add the label to the chart
    $('<div class="label-' + (i + 1) + '">').appendTo(element);
    $(label).css('grid-row-start', totalRows);
    $(label).css('grid-row-end', totalRows + 1);
    $(label).css('grid-column-start', (3 + i));
    $(label).css('grid-column-end', (4 + i));
    $('<h2>' + key + '</h2>').appendTo(label);
    
    // create a class for each bar, and position it from its starting value
    // down to the bottom bottom of the chart, and add the value to the bar
    $('<div class="bar-' + (i + 1) + '">').appendTo(element);
    $(bar).css('grid-row-start', ((totalRows) - data[key]));
    $(bar).css('grid-row-end', (totalRows));
    $(bar).css('grid-column-start', (3 + i));
    $(bar).css('grid-column-end', (4 + i));
    $('<h2>' + data[key] + '</h2>').appendTo(bar);
  } // end for loop

  // define the xAxis border
  $('<div class="xAxis">').appendTo(element);
  $('.xAxis').css('grid-row', totalRows + '/' + (totalRows + 1));
  $('.xAxis').css('grid-column', '3 / ' + (xLabels.length + 3));

  // ensure bar color matches that which is defined in options
  $('[class*="bar"]').css('background-color', options['bar-color']);

} // end defineBars function

function tickMarks(maxValue, element) {
  // define yAxis border
  $('<div class="yAxis">').appendTo(element);
  $('.yAxis').css('grid-row', '2 / ' + (maxValue + 2));
  $('.yAxis').css('grid-column', '2 / 3');

  // loop through MaxValue to determine and create 5 evenly spaced
  // tick marks along the yAxis
  for (let i = 0; i < 5; i++){
    let tick = '.tick-' + (i + 1);
    let tickValue = maxValue - (0.25 * i * maxValue);
    let tickRow = Math.round((maxValue + 2) - tickValue);
    $('<div class="tick-' + (i + 1) + '">').appendTo(element);
    $(tick).css('grid-row-start', (tickRow));
    $(tick).css('grid-row-end', (tickRow + 1));
    $(tick).css('grid-column', '2 / 3');
    $('<h2>' + tickValue + '</h2>').appendTo(tick);
  }
} // end tickMarks function


// user can input and "labels" and associated values into the data Object
let data = {"Mercury": 0, "Venus": 0, "Earth": 1, "Mars": 2, 
              "Jupiter": 67, "Saturn": 62, "Uranus": 27, "Neptune": 14};

// user can adjust any of the following options
let options = {'width': '70vw', 
                'height': '50vh', 
                'background-color': '#EEAA7B',
                'bar-color': '#66B9BF',
                'chart-title': 'Moons of Each Planet',
                'yAxisTitle': 'Number of Moons'
};
let element = '.chart'

// call the drawBarChart function, which in turns runs all of the above code
drawBarChart(data, options, element);

