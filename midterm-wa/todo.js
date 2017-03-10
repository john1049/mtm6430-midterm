(function() {
    var app = angular.module('todoApp', ['ngAnimate'])
    app.controller('todoController', function($scope) {
        $scope.tasks = (localStorage.getItem('todo') != null) ? JSON.parse(localStorage.getItem('todo')) : [];
        $scope.visible = false;

        $scope.update = function() {
            localStorage.setItem('todo', JSON.stringify($scope.tasks));
        }
				//The unfuck my tasks array
        $scope.unfuck = function(){
				    $scope.tasks = [];
				    $scope.update();
      }

        $scope.add = function() {
            $scope.todo = ({
                name: $scope.taskName,
                date: $scope.dueDate,
								complete: false
            })
						$scope.todo.id = cuid();
						$scope.tasks.push($scope.todo);
            $scope.update();
            $scope.taskName = '';
            $scope.dueDate = '';
        }

        $scope.delete = function() {
          $scope.tasks.splice(this.$index);
          $scope.update();
        }

        $scope.completed = function() {
						this.task.complete = true;
            $scope.update();
        }

				$scope.uncomplete = function() {
            this.task.complete = false;
            $scope.update();
        }
    })
})();
