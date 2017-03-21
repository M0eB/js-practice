
/*============================================================================
Version 9 - Escape from the Console

Summary : 

 * document.querySelector('ul') to get an element
 * document.createElement('li') to create an element
 * elementObjectVar.textContent = to set element content
 * elementObjectVar.appendChild(childObjectVar) to add a chile element   

V9 Requirements : 
 * There should be an element for every todo
 * Each li element should contain .todoText
 * Each li element should show .completed
/============================================================================*/

var todoList = {
    todos: [],
    addTodo: function(todo) {
      this.todos.push({
        todoText: todo,
        completed: false
      }
        );
    }
    ,
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
    }
    ,
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    }
    ,
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    }
    ,
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
    }
};


var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    }
    ,
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPosition');
        var changeTodoTextInput     = document.getElementById('changeTodoText');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    }
    ,
    toggleTodo: function() {
        var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
        view.displayTodos();
    }
    ,
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = '';
        view.displayTodos();
    }
    ,
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
}


var view = {
    displayTodos: function() {
        var todoListUL = document.querySelector('ul');
        todoListUL.textContent = '';

        for(var i = 0; i < todoList.todos.length; i++) {

            var todoListLI = document.createElement('li');
            var todoListLiText = '';

            if(todoList.todos[i].completed) {
                todoListLiText = '(x) ' + todoList.todos[i].todoText; 
            }
            else {
                todoListLiText = '( ) ' + todoList.todos[i].todoText;
            }

            todoListLI.textContent = todoListLiText;
            todoListUL.appendChild(todoListLI);            
        }
    }
}
