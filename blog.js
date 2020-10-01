
$.getJSON("https://twitter.com/statuses/user_timeline.json?screen_name=chrisspooner&count=1&callback=?",
		function(data){
			$.each(data, function(i,item){
			ct = item.text;
			ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&">$&</a>');
			ct = ct.replace(/\s(@)(\w+)/g,    ' @<a href="https://twitter.com/$2">$2</a>');
	 		ct = ct.replace(/\s(#)(\w+)/g,    ' #<a href="http://search.twitter.com/search?q=%23$2">$2</a>');
	   		$("#tweet").append('<p id="message">'+ct +'</p');
	  	});
	 });
 	 
    jQuery(document).ready( function() {
       var _config = {
         username: 'spoongraphics',
         count: 6,
         period: '7day'
     };
    lastFmRecords.init(_config);
    });

	$('#flickrimages').flickrush({id:'10201900@N03' }
