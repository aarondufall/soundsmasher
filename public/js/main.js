		SC.initialize({
		  client_id: '353905751836fc9ebe04c0efa52d7617',
		  redirect_uri: 'http://localhost:8080/callback.html'
		});

		// initiate auth popup
		SC.connect(function() {
		  SC.get('/me', function(me) { 
		    alert('Hello, ' + me.username); 
		  });
		});