/*global $,window,document,console, Modernizr */

/* Jayson Global namespace */
var Jaydson = function () {

};

Jaydson.prototype.header = {
	experiments : {
		register : function (name, fn) {
			// todo	
		}
	}
};

$(document).ready(function () {
	/* Create a LastFM object */
	var lastfm = new LastFM({
	  apiKey    : '17a9561667ea30b3fe1f313ea66d1fa7',
	  apiSecret : 'a34bd420d7e92219e0b6d3bdce9fcbb8'
	});

	/* Load some artist info. */
	lastfm.user.getRecentTracks({
		limit: 10,
		user : 	'jaydson',
		api_key : '17a9561667ea30b3fe1f313ea66d1fa7'
	}, 
	{
		success: function(data){
	  		console.log(data);
	  		var tracks = data.recenttracks.track,
	  			tracksLen = tracks.length,
	  			tpl = '<div class="nowlistening-block">' +
	  				  	'<div style="font-weight:bold">{{artist}}</div>' +
	  				  	'<div><a target="_blank" href="{{url}}">{{music}}</a></div>' +
	  				  	'<div>{{img}}</div></div>',
				trackDOM = '',
	  			i = 0;

	  		for (; i < tracksLen; i += 1) {
				trackDOM += tpl.replace(/\{\{artist\}\}/, tracks[i].artist['#text'])
							   .replace(/\{\{music\}\}/, tracks[i].name)
							   .replace(/\{\{url\}\}/, tracks[i].url)
							   .replace(/\{\{img\}\}/, tracks[i].image[1]['#text'] !== '' ? '<img src="' + decodeURI(tracks[i].image[1]['#text']) + '"></img>' : '');
	  		}
	  		document.querySelector('#nowlistening').innerHTML = trackDOM;
		}, 
		error: function(code, message){
	  /* Show error message. */
	}});
});