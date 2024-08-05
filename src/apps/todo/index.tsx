import { useState } from "react";

type Todo = {
  title: string;
  id: string;
  is_completed: boolean;
};

function TodoApp() {
  const [title, setTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([
    { title: "Some task", id: crypto.randomUUID(), is_completed: false },
    { title: "Some other task", id: crypto.randomUUID(), is_completed: true },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoList((prevTodos) => [
      ...prevTodos,
      { title, id: crypto.randomUUID(), is_completed: false },
    ]);

    // reset the form
    setTitle("");
  };
  const handleEdit = (todo: Todo) => {
    // const updatedTitle = todoList?.filter((todo) => todo?.id === id);
    // console.log(updatedTitle);
    // @ts-ignore
    // setTitle(updatedTitle?.title);
    setTitle(todo.title);
  };
  const handleDelete = (otodo: Todo) => {
    const updatedTodos = todoList?.filter((todo) => todo?.id !== otodo.id);
    setTodoList(updatedTodos);
  };
  return (
    <div>
      <h1>TodoApp</h1>

      <div style={{ display: "flex" }}>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="todo">
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Write your next task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <button
            type="submit"
            style={{ width: "70px", backgroundColor: "red" }}
          >
            Add
          </button>
        </form>
      </div>

      <div>
        {todoList.map((todo) => (
          <div style={{ display: "flex" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "15px",
              }}
              key={todo.id}
            >
              {todo.title}
            </span>
            <button
              onClick={() => handleEdit(todo)}
              style={{ width: "70px", backgroundColor: "greenyellow" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(todo)}
              style={{ width: "70px", backgroundColor: "green" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
