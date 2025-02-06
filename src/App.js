import './App.css';
import './index.css';
import './mobile.css'

// Import Component
import ContainerProfile from './components/ContainerProfile';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <ContainerProfile />
      <Content />
    </div>
  );
}

export default App;
