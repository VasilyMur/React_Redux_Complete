import './App.css';
import Likes from './Likes';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
