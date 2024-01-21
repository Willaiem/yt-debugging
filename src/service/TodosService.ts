class _TodosService {
  async get(callback: (todos: any) => void) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todos = response.json();
    callback(todos);
  }
}

export const TodosService = new _TodosService();
