import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Resume from './pages/Resume';
import ResumeGenerator from './pages/ResumeGenerator';

const styles = {
  width: "100vw",
  height: "100vh"
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <ResumeGenerator />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
