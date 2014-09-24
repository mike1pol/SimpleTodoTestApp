var TodoApp = angular.module('Todo', []);

TodoApp.controller('TodoCtrl', function($scope) {
	'use strict';

	$scope.todos = [];

	$scope.addTodo = function() {
		if (!$scope.newTodo)
			return false;
		$scope.todos.push({
			"desc": $scope.newTodo,
			"done": false 
		});
		$scope.newTodo = '';
	};

	$scope.clearDone = function() {
		var delTodos = _.where($scope.todos, {done: true});
		var newTodos = $scope.todos;
		_.each(delTodos, function(delTodo) {
			newTodos = _.without(newTodos, delTodo);
		});
		$scope.todos = newTodos;
	};

	$scope.do = function(index) {
		if (!$scope.todos[index].done)
			$scope.todos[index].done = true;
		else
			$scope.todos[index].done = false;
	};

	$scope.delete = function(index) {
		$scope.todos.splice(index, 1);
	};
});
