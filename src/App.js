import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import NuevaTarea from "./components/NuevaTarea";
import EditarTarea from "./components/EditarTarea";
import "./index.css";
function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Tareas} />
          <Route exact path="/tarea/nueva" component={NuevaTarea} />
          <Route exact path="/tarea/editar/:id" component={EditarTarea} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
