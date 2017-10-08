var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{

    // remove o # da url
	$locationProvider.html5Mode(true);
	
	
	//PARA CADA ROTA, DEFINIR UMA VIEW
	//propriedade usada para configurar as rotass
	$routeProvider
	
		 // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
		.when('/', {
			templateUrl: '#/home.html',  //indica a url da view
			controller: 'HomeCtrl'				//indica o controller correspondente
		});
		
		
		// para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
		.when('/sobre', {
		  templateUrl : 'sobre.html',
		  controller  : 'SobreCtrl'
		});

		// para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
		.when('/contato', {
		  templateUrl : 'contato.html',
		  controller  : 'ContatoCtrl'
		});
	
	// caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });	
});

