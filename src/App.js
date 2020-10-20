import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import Locationlist from "./components/listall";
import EditLocation from "./components/editlocation";
import CreateLocation from "./components/createlocation";
import Search from "./components/search";
function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div className="container">
      <Route path="/" exact component={Search} />
      <Route path="/edit/:id" component={EditLocation} />
      <Route path="/create" component={CreateLocation} />
      <Route path="/stores" component={Locationlist} />
      </div>
    </Router>
  );
}

export default App;
