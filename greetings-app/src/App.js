import './App.css';
import GreetingsContainer from "./components/GreetingsContainer";

function App() {
  return (
    <div className="mainContainer">
      <div className="topHeading">
        <h1>My Greeting App</h1>
      </div>
      <GreetingsContainer />
    </div>
  );
}

export default App;
