(function(){
	var app = angular.module('todoApp', [])
  	 app.controller('todoController', function($scope){
        $scope.tasks = localStorage.getItem('todo')!==null);
				console.log($scope.tasks);
        $scope.complete = [];
        $scope.taskComplete = false;
        $scope.visible = false;

        $scope.add = function() {
            $scope.tasks.push({name:$scope.taskName, date:$scope.dueDate});
						localStorage.setItem('todo', JSON.stringify($scope.tasks));
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
