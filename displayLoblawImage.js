var loblawImages = ['http://i.imgur.com/QPlnkeC.jpg',
 'http://i.imgur.com/PH7PiKE.jpg', 'http://i.imgur.com/X3GEAaN.jpg',
 'http://i.imgur.com/hxWMekc.jpg','http://i.imgur.com/h6j2vmf.jpg',
 'http://i.imgur.com/MojVVpH.jpg','http://i.imgur.com/5kBV4pL.jpg',
 'http://i.imgur.com/YQgGk6R.jpg','http://i.imgur.com/YQgGk6R.jpg',
 'http://i.imgur.com/YQgGk6R.jpg','http://i.imgur.com/YQgGk6R.jpg',];
var images = $('img');
for (i = 0; i < images.length; i++){
	var displayImage = loblawImages[Math.floor(Math.random() * loblawImages.length)];
	var img = images[i];
	$(img).attr('src', displayImage); 
}

var loblawGifs = ['http://i.imgur.com/ruowh3r.gif',
				  'http://i.imgur.com/V1jejKP.gif',];
var randInt = Math.floor(Math.random() * loblawGifs.length);
$("body").css("background-image","url('"+loblawGifs[randInt]+"')");


$("body").children().each(function () {
    $(this).html( $(this).html().replace(/Walmart/g,"Loblaws").replace(/Wal-Mart/g,"Loblaws").replace(/Metro/g,"Loblaws").replace(/Sobeys/g,"Loblaws") );
});
