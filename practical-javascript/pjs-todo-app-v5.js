
/*============================================================================
Version 5 - Loops of Logic

Summary : 

 * .length property on arrays
 * for loops
 * if statements

V5 Requirements : 
 * .displayTodos should show .todoText
 * .displayTodos should tell if .todos is empty
 * .displayTodos should show .completed
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
    }
};


todoList.displayTodos();
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
todoList.addTodo('item 4');
todoList.toggleCompleted(1);
todoList.toggleCompleted(3);