import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import PostsList from './Components/Posts/PostList';
import PostView from './Components/Posts/PostView';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>  
            <Route path="/" component={Home} exact />
            <Route path="/posts" exact component={PostsList} />
            <Route path="/posts/:id" component={PostView} />
            <Route component={NotFound} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
