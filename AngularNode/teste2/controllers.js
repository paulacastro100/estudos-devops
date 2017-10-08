
///////////////////// CONTROLLERS ////////////////////

app.controller('HomeCtrl', function($rootScope, $location) 
{
	$rootScope.activetab = $location.path();	//Seto na variavel global rootScope a pagina em que estou
});

app.controller('SobreCtrl', function($rootScope, $location) 
{
	$rootScope.activetab = $location.path();	
});

app.controller('ContatoCtrl', function($rootScope, $location) 
{
	$rootScope.activetab = $location.path();	
});