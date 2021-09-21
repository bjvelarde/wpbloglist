import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Post from './components/Post';
import Footer from './components/Footer';
import Articles from './components/Articles';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route exact path="/post/:slug">
              <Post />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
