import Header from './Header.js';
import Content from './Content.js';
import patternImage from './assets/pattern-circles.svg';
import './App.css';

function App() {
  return (
    <div className="background">
      <div className="background-pattern">
        <img src={patternImage} alt="" />
      </div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
