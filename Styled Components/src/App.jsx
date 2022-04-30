import "./App.css";
import Button from "./component/Button";

function App() {
  return (
    <div className="App">
      <Button variant={"primary"}>Primary Button</Button>
      <Button variant={"default"}>Default Button</Button>
      <Button variant={"dashed"}>Dashed Button</Button>
      <Button variant={"dotted"}>Dotted Button</Button>
      <Button variant={"text"}>Text Button</Button>
      <Button variant={"link"}>Link Button</Button>
      <p>Click on Buttons to see effects</p>
    </div>
  );
}

export default App;
