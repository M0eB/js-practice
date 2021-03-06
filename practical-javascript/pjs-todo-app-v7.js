
/*============================================================================
Version 7 - HTML and the DOM

Summary : 

 * 

V7 Requirements : 
 * 
/============================================================================*/

var todoList = {
    todos: [],
    displayTodos: function() {
    	if (this.todos.length === 0) {
    		console.log('My Todos:', 'This list ist empty.');    		
    	}
    	else {
    		console.log('My Todos:');
    		for (var i = 0; i < this.todos.length; i++) {

    			var completedLabel;
    			if(this.todos[i].completed)
    				completedLabel = '(x)';
    			else
    				completedLabel = '( )';

    			console.log(completedLabel + ' ' + this.todos[i].todoText);
    		}
    	}
    },
    addTodo: function(todo) {
      this.todos.push({
        todoText: todo,
        completed: false
      }
        );
      this.displayTodos();
    },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    toggleAll: function() {
    	var totalTodos = this.todos.length;
    	var completedTodos = 0;

    	//Count completed todos
    	for (var i = 0; i < this.todos.length; i++) {
    		if(this.todos[i].completed === true) {
				completedTodos++;
    		}
		}

		//Toggle completed status for all 
    	if (completedTodos === totalTodos) {
	    	for (var i = 0; i < this.todos.length; i++) 
    			this.todos[i].completed = false;
    	}
    	else {
	    	for (var i = 0; i < this.todos.length; i++) 
    			this.todos[i].completed = true;
		}

		this.displayTodos();
    }
};


var btn_displayTodos = document.getElementById('btnDisplayTodos');
var btn_toggleTodos  = document.getElementById('btnToggleTodos');

btn_displayTodos.addEventListener('click', function() {
    todoList.displayTodos();
});

btn_toggleTodos.addEventListener('click', function() {
    todoList.toggleAll();
})
