/*!
 * Javascript's validations 
 * @author : Edwin Torres
 */
$(function(){

	//I'm ready so it rocks!
	loadContentGallery();

 });

/**
 * Reads and gets the attributes from the gallery_json
 * to load the content in the corresponding tag
 **/
function loadContentGallery(){
	$.getJSON( "js/json/gallery_json.js", function( data ) {
		var gallery = data;

		// Title
		$(".album-name").html(gallery.album.name);

		// Images and Thumbs
		var urlBase = "img/";

		gallery.photos.forEach(function(photo){

			var thumb = $("<img>")
				.attr("src", urlBase + photo.thumb_url)
				.addClass("thumb")
				.addClass("thumb-inactive");

			$("<li>")
				.append(thumb)
				.attr("data-target", "#largeGallery")
				.attr("data-slide-to", photo.id)
				.appendTo("#thumbGallery");
		});

		$("<img>")
		.attr("src", urlBase + gallery.photos[0].image)
		.addClass("large")
		.appendTo("#largeGallery");

	});
}