import "./App.css";
import Stars from "./components/Stars";

const App: React.FC = () => {
  const count = 5;
  return (
    <div className="App">
      <Stars count={count} />
    </div>
  );
};

export default App;
