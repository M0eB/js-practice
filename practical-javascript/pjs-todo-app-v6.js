
/*============================================================================
Version 6 - Thinking in Code

Summary : Think Systematically how to fulfill requirements

 * Really understand how soemthing works or what customers expect it to work
 * Once you have an understanding then you can get into the planning process
 * Write out some steps/cases to make it easier for you to write the program

V6 Requirements : 
 * .toggleAll: If everything's true, make everything false.
 * .toggleAll: Otherwise, make everything true.
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


todoList.displayTodos();
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
todoList.addTodo('item 4');
todoList.toggleCompleted(1);
todoList.toggleCompleted(3);
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAll();