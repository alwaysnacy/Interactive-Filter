var mainImage = null;

function loadImage() {
  var fileinput = document.getElementById("finput");
  mainImage = new SimpleImage(fileinput);
  var mainCanvas = document.getElementById("can");
  mainImage.drawTo(mainCanvas);
  if (mainImage != null) {
    alert("Image loaded!");
  } else {
    alert("Please upload again!")
  }
}

function makeGray() {
	var grayImage = new SimpleImage(mainImage.getWidth(), mainImage.getHeight());
	var mainCanvas = document.getElementById("can");
	clearCanvas();
	for (pixel of grayImage.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		var mainPixel = mainImage.getPixel(x, y);
		var red = mainPixel.getRed();
		var green = mainPixel.getGreen();
		var blue = mainPixel.getBlue();
		var gray = (red + green + blue) / 3;
		pixel.setGreen(gray);
		pixel.setBlue(gray);
		pixel.setRed(gray);
	}
	alert("Done converting.")
	grayImage.drawTo(mainCanvas);
}

function clearCanvas() {
	var mainCanvas = document.getElementById("can");
	var ctx = mainCanvas.getContext("2d");
	ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}

function makeRed() {
	var mainCanvas = document.getElementById("can");
	var redImage = new SimpleImage(mainImage.getWidth(), mainImage.getHeight());
	for (pixel of redImage.values()) {
	  var x = pixel.getX();
	  var y = pixel.getY();
	  var mainPixel = mainImage.getPixel(x, y);
	  var red = mainPixel.getRed();
	  var green = mainPixel.getGreen();
	  var blue = mainPixel.getBlue();
	  var avg = (red + green + blue) / 3;
	  if (avg < 128) {
		pixel.setRed(avg * 2);  
		pixel.setGreen(0);
		pixel.setBlue(0);
	  } else {
		pixel.setRed(red);  
		pixel.setGreen(green);
		pixel.setBlue(blue);        
	  }
  }
	alert("Done converting.")
	redImage.drawTo(mainCanvas);
}

function makeChromatic() {
	var mainCanvas = document.getElementById("can");
	var chImage = new SimpleImage(mainImage.getWidth(), mainImage.getHeight());
	var height = mainImage.getHeight()/6;
	for (pixel of chImage.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		var mainPixel = mainImage.getPixel(x, y);
		var red = mainPixel.getRed();
		var green = mainPixel.getGreen();
		var blue = mainPixel.getBlue();
		var avg = (red + green + blue) / 3;
		if (y < height) {
		  pixel.setRed(200);  
		  pixel.setGreen(green);
		  pixel.setBlue(blue);
		} else if (y < height * 2) {
		  pixel.setRed(red);  
		  pixel.setGreen(200);
		  pixel.setBlue(blue);        
		} else if (y < height * 3) {
		  pixel.setRed(red);  
		  pixel.setGreen(200);
		  pixel.setBlue(200);        
		 }else if (y < height * 4) {
		  pixel.setRed(200);  
		  pixel.setGreen(200);
		  pixel.setBlue(blue);        
		} else if (y < height * 5) {
		  pixel.setRed(red);  
		  pixel.setGreen(green);
		  pixel.setBlue(200);        
		} else {
		  pixel.setRed(200);  
		  pixel.setGreen(green);
		  pixel.setBlue(200);        
		}
	  }
	alert("Done converting.")
	chImage.drawTo(mainCanvas);
	  
}
function reset() {
	var mainCanvas = document.getElementById("can");
	clearCanvas();
	mainImage.drawTo(mainCanvas);
}