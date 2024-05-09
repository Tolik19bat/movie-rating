import './App.css'
import Stars from './components/Stars'

const App: React.FC = () => {
  return (
    <div className="App">
      <Stars count={3} />
    </div>
  );
};

export default App;