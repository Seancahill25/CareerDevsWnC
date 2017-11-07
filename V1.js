> var todos = ['item 1', 'item 2', 'item 3']; 
undefined
> console.log('My todos:', todos);
My todos: [ 'item 1', 'item 2', 'item 3' ]
undefined
> todos.push('item 4');
4
> todos.push('item 5');
5
> todos[0
... ]
'item 1'
> todos[1]
'item 2'
> todos[3]
'item 4'
> todos[0] = 'item 1 updated'
'item 1 updated'
> todos.splice(0, 1)
[ 'item 1 updated' ]
> todos.splice(3, 1)
[ 'item 5' ]
> todos
[ 'item 2', 'item 3', 'item 4' ]









