angular.module("CustomDirective")
.controller("ReposController", function($scope,$http){
	$scope.repos = [];
	$http.get("https://api.github.com/users/codigofacilito/repos")
	.success(function(data){
		$scope.posts = data;
		for (var i = data.length - 1; i >= 0; i--) {
			var repo = data[i];
			$scope.repos.push(repo.name);
		};
	})
	.error(function(err) {
		/* Act on the event */
		console.log(err);
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){
			$scope.main_repo = data;
		})
	}

})
.controller("RepoController", function($scope,$http,$routeParams){
	$scope.repo = {};
	$http.get("https://api.github.com/repos/codigofacilito/"+$routeParams.name)
	.success(function(data){
		$scope.repo = data;
	})
	.error(function(err) {
		/* Act on the event */
		console.log(err);
	});
})