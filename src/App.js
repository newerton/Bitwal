import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Accumulator from './Components/Accumulator/Accumulator';
import AccumulatorMain from './Components/Accumulator_Data/AccumulatorDataMain';
import Football from './Components/Football/Football';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyBets from './Components/MyBets/MyBets';
import Register from './Components/Register/Register';
import Special from './Components/Special/Special';
import User from './Components/User/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my_bets" component={MyBets} />
        <Route exact path="/accumulator" component={Accumulator} />
        <Route path="/special" component={Special} />
        <Route path="/football" component={Football} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
        <Route path="/accumulator_data" component={AccumulatorMain} />
      </Switch>
    </Router>
    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
