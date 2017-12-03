// Code goes here
var app = angular.module('app', []);

app.factory('recognizeService', function($http) {
    return {
        recognize: function(idPrivate, userData) {
            //var url = 'https://wt-d981132ea35e2349c857bb4e6157e5ea-0.run.webtask.io/hello';
		//var url ='https://wt-d981132ea35e2349c857bb4e6157e5ea-0.run.webtask.io/Login-logout';
		var url = 'https://wt-d981132ea35e2349c857bb4e6157e5ea-0.run.webtask.io/signIn';
            return $http({
                method: 'POST',
                url,
                data: {
                    idPrivate: idPrivate,
					userData : userData
                }
            });
        }
    }
});

app.controller('mainCtrl', function($scope, recognizeService ) {
    $scope.isLoading = false;

    $scope.$watch('input.imageLink', function(oldValue, newValue) {
        $scope.faces = [];
        $scope.faceDisplay = [];
    });

    // Gọi hàm này khi người dùng click button "Nhận diện"
    $scope.recognize = function() {
        if ($scope.isLoading)
            return;

        $scope.isLoading = true;
		
		recognizeService.recognize($scope.input.id, $scope.input.use).then(result => {
			if(res.statusCode == 200){
				alert('Tạo tài khoảng thành công');
			}else{alert('Vui lòng chọn mã cá nhân khác')}
            $scope.isLoading = false;
			});
		}

});
