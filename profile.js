$(function(){ 
	$('.profile');

	var github_username = "graym";
	var github_url = "https://api.github.com/users/";

	var url = github_url+github_username;
	console.log('grabbing profile data:', github_url+github_username);

	var github_data = $.getJSON(url);

	// template
	var template_string = $('#github_profile_template')[0].textContent;
	var createProfileStringFromData = _.template(template_string);


	github_data.then(function(data){
		var github_html = createProfileStringFromData(data);
		$('body').append(github_html);
	});

});