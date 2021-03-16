import { BrowserRouter,Redirect, Switch } from "react-router-dom";
// Observer
import Observer from './components/containers/Observer'
// Routes
import PublicRoute from './routes/public.routes'
import PrivateRoute from './routes/private.routes'
import LogRoute from './routes/log.routes'
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
import CartView from './views/CartView'
import PayView from './views/PayView'
import AccountView from './views/AccountView'
// Auxiliar
import Probe from './views/Probe'

function App() {
  return (
    <>
      <AppState>
        <Observer>
          <BrowserRouter>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <LogRoute exact path="/iniciar-sesion" component={LoginView} />
              <LogRoute exact path="/registro" component={RegisterView} />
              <LogRoute exact path="/recuperar-contrasenia" component={RecoverView} />
              <PublicRoute exact path="/productos" component={CategoriesView} />
              <PublicRoute exact path="/productos/:id" component={CategoryView} />
              <PublicRoute exact path="/producto/:id" component={ProductView} />
              <PublicRoute exact path="/nosotros/:info" component={AboutView} />
              <PublicRoute exact path="/carrito" component={CartView} />
              <PrivateRoute exact path="/pasarela-de-pago" component={PayView} />
              <PrivateRoute exact path="/perfil/:id" component={AccountView} />
              <PublicRoute exact path="/probe" component={Probe} />
              <Redirect path="/**" to="/" /> 
            </Switch>
          </BrowserRouter>
        </Observer>
      </AppState>
    </>
  );
}

export default App;
