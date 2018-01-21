angular.module('app.services', [])
.service('cozinhaService', [function(){

var users = [];

	return {
		getInfo: function(){
			return "valor do service"
			/*
			// valor de retorno de uma api
			return $http.get("https://www.yoursite.com/users").then(function(response){
				users = response;
				return users;
			});
			*/
		},
		getUser: function(index){
			return users[index];
		}
	}

}]);