import { Counter } from "./components/Counter";
import { TodosViewer } from "./components/TodosViewer";

function App() {
  return (
    <div>
      <h1>Debugging Example</h1>
      <p>There's a bug in this application - can you manage to find one?</p>
      <div>
        <p>Tips:</p>
        <ol>
          <li>
            Use <a href="https://www.locatorjs.com/">LocatorJS</a> to easily
            find components in this app.
          </li>
          <li>
            Use Quokka.js to run the JavaScript/TypeScript code that might be
            involved with the bug.
          </li>
          <li>Use the debugger to debug the process step-by-step.</li>
        </ol>
      </div>

      <Counter />
      <TodosViewer />
    </div>
  );
}

export default App;
