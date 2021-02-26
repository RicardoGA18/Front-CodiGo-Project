import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import RecoverView from './views/RecoverView'
import CategoriesView from './views/CategoriesView'
import CategoryView from './views/CategoryView'
import ProductView from './views/ProductView'
import AboutView from './views/AboutView'
import AppState from './context/App/AppState'
// Auxiliar
import Probe from './views/Probe'

function App() {
  return (
    <>
      <AppState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/iniciar-sesion" component={LoginView} />
            <Route exact path="/registro" component={RegisterView} />
            <Route exact path="/recuperar-contrasenia" component={RecoverView} />
            <Route exact path="/productos" component={CategoriesView} />
            <Route exact path="/productos/:id" component={CategoryView} />
            <Route exact path="/productos/:id/:idProduct" component={ProductView} />
            <Route exact path="/nosotros/:info" component={AboutView} />
            <Route exact path="/probe" component={Probe} />
          </Switch>
        </BrowserRouter>
      </AppState>
    </>
  );
}

export default App;
