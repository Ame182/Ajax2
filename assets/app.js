$(function(){
	var url = 'http://api.apixu.com'
	var key = '02dfee9b23454b93b12214420192501'

	$('#select').on('change' , function(){
		$.ajax({
		url: 'http://api.apixu.com/v1/current.json?key=02dfee9b23454b93b12214420192501&q=Paris' ,
		method: 'GET'
		})

		.then(function(data){
		console.log(data);

	 
		});
	});

})
