import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>

            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/create'>
              <Create/>
            </Route>

            <Route exact path="/blog/:id"> 
              <BlogDetail/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
