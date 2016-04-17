var scan = function() {
	   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled + "\n" +
				"Result = " + result.text);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
};

var getPics = function() {
	window.imagePicker.getPictures(
		function(results) {
			for (var i = 0; i < results.length; i++) {
				console.log('Image URI: ' + results[i]);
			}
		}, function (error) {
			console.log('Error: ' + error);
		}, {
			maximumImagesCount: 10,
			width: 800
		}
	);
};