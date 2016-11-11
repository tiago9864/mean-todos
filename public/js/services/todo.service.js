
(function() {
  angular.module('mean-todos')
        .factory('TodoService', TodoService); //data manipulation

  TodoService.$inject = ['$http'];

  function TodoService($http){
    init(); // function call

    var todos = [];
    return {
      get: getAllTodos,
      create: createOneTodo,
      update: updateOneTodo,
      delete: deleteOneTodo

    };

    function init(){ //this is goin to make our first data request on file load
      $http.get('/todos')
         .then(function(response){
           todos = response.data.todos;
         })
         .catch(function(err){
           console.log(err);
         });
    }
    function getAllTodos(){
      return todos;
    }
    function createOneTodo(todo){
      //DEBUGGER;
      $http.post('/todos', todo)//modify my data
      .then(function(response){
        todos.push(todo);//
      })
      .catch(function(err){
        console.log(err);
      });
    }
    function updateOneTodo(index, todo){}
    function deleteOneTodo(index){}
  }
}());
