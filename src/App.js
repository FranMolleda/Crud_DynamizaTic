import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import NuevaTarea from "./components/NuevaTarea";
import EditarTarea from "./components/EditarTarea";
import "./index.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Tareas} />
            <Route exact path="/tarea/nueva" component={NuevaTarea} />
            <Route exact path="/tarea/editar/:id" component={EditarTarea} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
