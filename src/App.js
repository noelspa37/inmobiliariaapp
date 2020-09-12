import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppNavbar from './componentes/layout/AppNavbar'
import theme from './theme/theme'
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Login from './componentes/seguridad/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />

          <Grid container>
            <Switch>
              <Route path='/' exact component={ListaInmuebles} />
              <Route path='/auth/registrarUsuario' exact component={RegistrarUsuario} />
              <Route path='/auth/login' exact component={Login} />
            </Switch>
          </Grid>

        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
