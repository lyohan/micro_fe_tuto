import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import GreetingCat from './GreetingCat'
import RandomCat from './RandomCat'

function App() {
  return (
    <Router>
      <Route exact path="/" component={RandomCat} />
      <Route path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
}

export default App;
