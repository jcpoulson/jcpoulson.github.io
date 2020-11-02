$(document).ready(function(){
	let images = $('.a'); //selects the images and stores them in images variable

	$("#search").on('keyup', function() {
	let searchBox = $('#search').val().toUpperCase(); //grabs the value in the search box and sets it to uppercase
	for ( let i = 0; i < images.length; i++){ //loops through every image in the images collection
		let searchVal = images[i].getAttribute('data-title'); // grabs the current image and gets the data-title attribute
		if (searchVal.toUpperCase().indexOf(searchBox) > -1) { // changes the data title to uppercase and if the index doesn't match the search box, it
			images[i].style.display = "";
			} else {					// changes the styling of the current image depending on the code
			images[i].style.display = "none";
			}
			
        }
    });
});