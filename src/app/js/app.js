var app = angular.module('app',[]);

app.controller( 'CodeListController', [ '$rootScope', '$scope', '$http', function( $rootScope, $scope, $http ) {
  	/* Get all Code List */
	$http.get( '/api/ctz_coders', {
		params: {
			type  : "json",
			query : "list_submissions",
			page  : "1"
		}
	})
	.then( function( data ){
		$scope.codeList   = data.data.websites;

		$http.get( '/api/ctz_coders', {
			params: {
				type  : "json",
				query : "list_compiler_image"
			}
		})
		.then( function( data ){
			$scope.compilerImage = data.data;
			$scope.codeList.filter( function( obj, ind ){
				angular.forEach( $scope.compilerImage, function( value, key ){
					if( value.language === obj.language ){
						obj["path"] = value.icon;
					}
				})
			})
		}, function( error ){

		});
	}, function( error ){

	});
}]);

app.controller( 'filterController', [ '$rootScope', '$scope', '$http', function( $rootScope, $scope, $http ) {
	/* Get all Status List */
	$scope.statusList = [{
		"name" : "Accepted",
		"checked" : false
	}, {
		"name" : "Skipped", 
		"checked" : false
	}, {
		"name" : "Memory / Time limit exceeded", 
		"checked" : false
	}, {
		"name" : "Rutime / Compilation error", 
		"checked" : false
	}, {
		"name" : "Wrong Answer", 
		"checked" : false
	}]
}]);

app.controller( 'statController', [ '$rootScope', '$scope', '$http', function( $rootScope, $scope, $http ) {
	/* Get Statiscal Data */


	
}]);



