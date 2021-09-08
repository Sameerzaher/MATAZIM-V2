import './App.css';
import Navbar from "./components/Navbar";
import HomepageScreen from './pages/HomepageScreen';
import CoursesScreen from './pages/CoursesScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import SignUp from './pages/signup';
//import SignIn from './pages/signin';
function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/HomepageScreen" exact component={HomepageScreen} />
      <Route path="/CoursesScreen" component={CoursesScreen} />
      <Route path="/ProjectsScreen" component={ProjectsScreen} />
    </Switch>
  </Router>
  );
}

export default App;
