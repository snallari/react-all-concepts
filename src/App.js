/* REACT ROUTER
-Import link, route, routes, browser router as router, 
- To add navigation via  <nav><ul><li><Link to="">
-To add the actual routing add routes, route, path, element GJ3/4 */ 

import logo from './logo.svg';
import './App.css';
import Labels  from './components/Labels';
import Apis from './components/Apis'
import InfiniteLoader from './components/InfiniteLoader';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Routes, Link,Switch } from "react-router-dom";
import Formik from './components/Formik';
import Forms from './components/Forms';
import ContextUsage from './components/ContextUsage';
import SampleDataProvider from './components/SampleDataProvider';
import CloneElemenyP1 from './components/CloneElelementP1';
import HOC from './components/HOC';
import ChildrenDialog from './components/ChildrenDialog';


function App() {
 //console.log("react", process.env.REACT_APP_SECRET_NAME)

  return (
    <div className="App">
    {/* //   <Apis/>
    // </div> */}
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/apis">API</Link>
            </li>
            <li>
              <Link to="/loader">Props</Link>
            </li>
            <li>
              <Link to="/formik">Formik</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/labels">Labels</Link>
            </li>
            <li>
              <Link to="/clone">Clone</Link>
            </li>
            <li>
              <Link to="/">Context</Link>
            </li>
            <li>
              <Link to="/HOC">HOC</Link>
            </li>
            <li>
              <Link to="/modals">Modals</Link>
            </li>
          </ul>
        </nav> 

        <Routes>
        <Route path="/forms" element={<Forms/>}></Route>
          <Route path="/formik" element={<Formik/>}></Route>
          <Route path="/apis" element={<Apis/>}/>
          <Route path="/loader" element={<InfiniteLoader/>}/>
          <Route path="/labels" element={<Labels/>}/>
          <Route path="/clone" element={<CloneElemenyP1 details={{nam:"shruti", age:18, g:"f"}}/>}/>
          <Route path="/" element={<ContextUsage/>}/>
          <Route path="/HOC" element={<HOC/>}/>
          <Route path="/modals" element={<ChildrenDialog/>}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App;
