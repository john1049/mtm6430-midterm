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
            $scope.tasks.push({
                name: $scope.taskName,
                date: $scope.dueDate
            });
            $scope.update();
            $scope.taskName = '';
            $scope.dueDate = '';
        }

        $scope.delete = function() {
            $scope.tasks.splice(this.$index, 1);
            $scope.update();
        }

        $scope.completed = function() {
            $scope.complete.push($scope.tasks[this.$index]);
            localStorage.setItem('complete', JSON.stringify($scope.complete));
            $scope.tasks.splice(this.$index, 1);
            $scope.update();
        }

        $scope.deleteComplete = function() {
            $scope.complete = [];
        }
    })
})();
