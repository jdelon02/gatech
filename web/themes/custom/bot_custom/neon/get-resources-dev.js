
jQuery(document).ready(function(){

   if ( jQuery(location).attr('href').indexOf('/accountHome.do') >= 0 ){

/*	alert("please ignore, this is a BOT test...");
	jQuery.ajax({
              type:'GET',
              url:'https://dev-fsa-d8.pantheonsite.io/recent-resources/139',
              crossDomain: true,
              //dataType: 'xml',
              //data:{ accountID: accountID },
              success: function(data,status){
                alert("Data returned is " + data + "\nStatus: " + status);
              },
              error:function(data){
                console.log('There was a problem with ajax call');
              },
              async:false,
            }); */
			
	//jQuery("#rss-feeds").rss("https://ssodiscours-fsa-d8.pantheonsite.io/recent-resources/139");
jQuery("#rss-feeds").rss(
"https://dev-fsa-d8.pantheonsite.io/recent-resources/139",{
  limit: 6,
  layoutTemplate: "{entries}",
  entryTemplate:
    '<div class="resource-row col-sm-12 col-md-6 col-lg-4"><div class="resource-inner"><div class="type text-pink text-uppercase">RESOURCE</div><h3><a href="{url}">{title}</a></h3><br/><p>{bodyPlain}</p></div></div>'
});
	
	
	
	
  }
  
});
