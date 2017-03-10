(function() {
    var app = angular.module('todoApp', [])
    app.controller('todoController', function($scope) {
        $scope.tasks = (localStorage.getItem('todo') != null) ? JSON.parse(localStorage.getItem('todo')) : [];
        $scope.complete = (localStorage.getItem('complete') != null) ? JSON.parse(localStorage.getItem('complete')) : [];
        $scope.visible = false;

        $scope.update = function() {
            localStorage.setItem('todo', JSON.stringify($scope.tasks));
        }

        $scope.add = function() {
            $scope.todo = ({
                name: $scope.taskName,
                date: $scope.dueDate,
								complete: false
            });
						$scope.todo.id = cuid();
						console.log($scope.todo);
						$scope.tasks.push($scope.todo);
            $scope.update();
            $scope.taskName = '';
            $scope.dueDate = '';
        }

        $scope.delete = function() {
            $scope.tasks.splice(this.$index, 1);
            $scope.update();
        }

        $scope.completed = function() {
            $scope.todo.complete = true;
            $scope.update();
        }
    })
})();
