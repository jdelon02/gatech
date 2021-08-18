jQuery(document).ready(function(){

	var base_url = 'https://www.fsainfo.org';
	//var base_url = 'https://dev-fsa-d8.pantheonsite.io';

	if ( jQuery(location).attr('href').indexOf('neonPage.jsp?pageId=14') >= 0 ){

		//alert("please ignore, this is a BOT test...");
		jQuery.ajax({
			type:'GET',
			url: base_url + '/getDiscoursePosts',
			crossDomain: true,
			cache: false,
			dataType: 'json',
			success: function(result,status,raw){
				jQuery.each(result, function(key,val) {
					console.log("topic is " + val.title + " and last post made on " + val.updated);
					jQuery('.post-grid').append("<div class='post-row'><div class='col-sm-5 row'><p class='post-title'>" + val.title + "</p></div><div class='col-sm-5 row'></div><div class='col-sm-2 row'><p class='post-date'>" + val.updated + "</p></div></div>");
				});
			},
			error:function(data,status,error){
				console.log("There was a problem with ajax call - status is " + status);
				console.log("Error code is" + error);
			},
			async:false,
		});
	}

	if ( jQuery(location).attr('href').indexOf('/accountHome.do') >= 0 ){

		//console.log('why running again');

		accountID = jQuery('#neonAccountID').text().replace("(Account# ","").replace(")","");
		jQuery.ajax({

			type:'GET',
			url: base_url + '/emailAddressFromNeon?aID=' + accountID,
			crossDomain: true,
			cache: false,
			dataType: 'json',
			success: function(result,status,raw){

				//jQuery.each(result, function(key,val) {
				console.log("email address is " + result);
				//	terms = val.terms;
				//	alert("relevant taxonomy ids are " + val.terms);
				//});
				emailAddressToDiscourse = result;
			},
			error:function(data,status,error){
				console.log("There was a problem with ajax call - status is " + status);
				console.log("Error code is" + error);
			},
			async:false,
		});

		jQuery('.post-grid').html("<div class='post-row'><div class='col-sm-5 row'><p class='post-title'>Loading...</p></div></div>");

		jQuery.ajax({
			type:'GET',
			url: base_url + '/getDiscoursePosts?emailAddress=' + encodeURIComponent(emailAddressToDiscourse),
			crossDomain: true,
			cache: false,
			dataType: 'json',
			success: function(result,status,raw){

				jQuery('.post-grid').html('');
				jQuery.each(result, function(key,val) {
					console.log("topic is " + val.title + " and last post made on " + val.updated);
					//jQuery('.post-grid').append("<div class='post-row'><div class='col-sm-5 row'><p class='post-title'><a href='https://discourse.fsainfo.org/t/" + val.slug + "/" + val.id + "' target=_blank >" + val.title + "</a></p></div><div class='col-sm-5 row'></div><div class='col-sm-2 row'><p class='post-date'>" + val.updated + "</p></div></div>");
					jQuery('.post-grid').append("<div class='post-row'><div class='col-sm-5 row'><p class='post-title'><a href='https://discourse.fsainfo.org/t/" + val.slug + "/" + val.id + "' target=_blank >" + val.title + "</a></p></div><div class='col-sm-5 row'></div><div class='col-sm-2 row'><p class='post-date'>" + val.updated + "</p></div></div>");
				});
			},
			error:function(data,status,error){
				console.log("There was a problem with ajax call - status is " + status);
				console.log("Error code is" + error);
			},
			async:true,
		});

		//jQuery("#rss-feeds").rss("https://ssodiscours-fsa-d8.pantheonsite.io/recent-resources/139");

		jQuery.ajax({
			type:'GET',
			url: base_url + '/getAccessTerms?aID=' + accountID,
			crossDomain: true,
			cache: false,
			dataType: 'json',
			success: function(result,status,raw){
				//jQuery.each(result, function(key,val) {
				console.log("taxonomy terms are " + result);
				//	terms = val.terms;
				//	alert("relevant taxonomy ids are " + val.terms);
				//});
				terms = result;
			},
			error:function(data,status,error){
				console.log("There was a problem with ajax call - status is " + status);
				console.log("Error code is" + error);
			},
			async:false,
		}); 

		//alert("account id is " +accountID);

		jQuery("#rss-feeds").rss(

			base_url + "/recent-resources/" + terms,{
			limit: 6,
			layoutTemplate: "{entries}",
			entryTemplate:
			'<div class="resource-row col-sm-12 col-md-6 col-lg-4"><div class="resource-inner"><div class="type text-pink text-uppercase">RESOURCE</div><h3><a href="{url}">{title}</a></h3><br/><p>{bodyPlain}</p></div></div>'
		});
	}
});