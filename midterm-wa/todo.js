(function(){
	var app = angular.module('todoApp', [])
  	 app.controller('todoController', function($scope){
        $scope.tasks = [];
        $scope.complete = [];
        $scope.taskComplete = false;
        $scope.visible = false;

        $scope.add = function() {
            $scope.tasks.push({name:$scope.taskName, date:$scope.dueDate});
            $scope.taskName = '';
            $scope.dueDate = '';
        }

        $scope.delete = function(){
          $scope.tasks.splice(this.$index, 1);
        }

        $scope.completed = function(){
          $scope.complete.push($scope.tasks[this.$index]);
          $scope.tasks.splice(this.$index, 1);
          $scope.taskComplete = true;
        }

				$scope.deleteComplete = function(){
          $scope.complete = [];
        }

    })
	})();
