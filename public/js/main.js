SC.initialize({
  client_id: '353905751836fc9ebe04c0efa52d7617',
  redirect_uri: 'http://localhost:8080/callback.html'
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    console.log(me.id);
    getPlaylists(me.id); 
  });
});

function getPlaylists(userId){
	SC.get('/users/'+userId+'/playlists', function(playlists){
		console.log(playlists);
		console.log(playlists[0].title); //title of first playlist
		console.log(playlists[0].tracks[0]) //selects track in playlist
		playTrack(playlists[0].tracks[0].id)
	})
}


function trackPosition (track) {
	console.log(track.position); //logs track position in milliseconds
}


function fastForward (track) {
	track.setPosition(240000);
	track.play();
}

function playTrack(id) {
  SC.whenStreamingReady(function() {
    var sound = SC.stream(id, { autoPlay: false }, function(sound){
      sound.play({
      	onload: function() {
      	 	this.setPosition(94000); // delibrate skip ahead to test if clients can be synced
      	},
      	whileplaying: function() {
      		console.log('playing, '+this.position+' of '+this.duration)
      	},
      	onfinish: function() {
      		this.setPosition(0)
      		this.play()
      	} 
      });
      // var currentPosition = setInterval(trackPosition,3000,sound);
    });
  });
}
