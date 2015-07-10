var loblawImages = ['http://i.imgur.com/QPlnkeC.jpg',
 'http://i.imgur.com/PH7PiKE.jpg', 'http://i.imgur.com/X3GEAaN.jpg',
 'http://i.imgur.com/hxWMekc.jpg','http://i.imgur.com/h6j2vmf.jpg',
 'http://i.imgur.com/MojVVpH.jpg','http://i.imgur.com/5kBV4pL.jpg',
 'http://i.imgur.com/YQgGk6R.jpg',];
var images = $('img');
for (i = 0; i < images.length; i++){
	var displayImage = loblawImages[Math.floor(Math.random() * loblawImages.length)];
	var img = images[i];
	$(img).attr('src', displayImage); 
}