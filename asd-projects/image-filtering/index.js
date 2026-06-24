// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);

  applyFilterNoBackground(purplefy);

  applyFilter(decreaseBlue);
 
  applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
 render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel);
      // This where modidy color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);

      image[r][c] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  //grabs top left color pixel
  var backgroundColor = image[0][0];
  //iterated thu image pixel by pixel
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      //checks color is different from background
      if (image[r][c] !== backgroundColor) {
        var pixel = image[r][c];
        var pixelArray = rgbStringToArray(pixel);
        //this mofidy colors later
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);

        image[r][c] = updatedPixel;
      }
     
      
    }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 225;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 25);
  keepInBounds(pixelArray[BLUE]);
}
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN] + pixelArray[BLUE]);
  keepInBounds(pixelArray[GREEN]);
}
// CHALLENGE code goes below here
function purplefy(pixelArray) {
  pixelArray[RED] = keepInBounds(pixelArray[RED] + 100);
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] + 100);
}