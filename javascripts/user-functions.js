

var $urlQuery = window.location.search.substring(1);
var $projectName = $urlQuery.split("?");

$('h1').html($projectName);


