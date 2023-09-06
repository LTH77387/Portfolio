import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
   <>
     <Router>
    <Switch>  
      <Route exact path='/' component={HomePage}></Route>
    </Switch>
   </Router>
   </>
  );
}

export default App;
