import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import MicroFrontend from './MicroFrontend'

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  )
}

function Dogs() {
  return <MicroFrontend host={dogsHost} name="Dogs" />
}

function Cats() {
  return <MicroFrontend host={catsHost} name="Cats" />
}

function GreetingCat() {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend host={catsHost} name="Cats" />
      </div>
    </div>
  )
}

function Home() {
  const [input, setInput] = useState('')
  const history = useHistory()
  const handleOnClick = () => history.push(`/cat/${input}`)
  
  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            {/* <Dogs /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cat/:greeting" component={GreetingCat} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
