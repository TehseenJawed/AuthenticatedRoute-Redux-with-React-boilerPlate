import {BrowserRouter as Router} from 'react-router-dom'
import PublicRouter from './Router'
import './App.css';

function App() {
  return (
    <Router>
      <PublicRouter/>
    </Router>
  );
}

export default App;
