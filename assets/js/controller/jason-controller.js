jasonApp.controller("jasonController", [ '$scope', '$http', function ($scope, $http)  {

    $scope.jName = "jAson";

    console.log('jasonController loaded');

	// Simple GET request example:
	$http({
	  method: 'GET',
	  url: 'users.json'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available

	    console.log('ok');
	    console.log(response.data);

	    $scope.users = response.data;

	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    console.log('error');
	    console.log(response.data);
	  });

}]);
