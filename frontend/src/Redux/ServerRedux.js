  const urlAdd = 'http://localhost:5000/todos.add';
  const urlToggle = 'http://localhost:5000/todos.toggle';

 export async function sendNewTodo(todo) {
  try {
    const response = await fetch(urlAdd, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({todo})
    });
    console.log(response);
  } catch (exception) {
    console.log(`Error: ${exception}`);
  }
}

export async function sendToggleTodo(id, completed) {
  try {
    const response = await fetch(urlToggle, {
      'method': 'PUT',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        id,
        completed
      })
    });
    console.log(response);
  } catch (exception) {
    console.log(`Error: ${exception}`);
  }
}
