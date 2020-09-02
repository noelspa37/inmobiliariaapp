import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppNavbar from './componentes/layout/AppNavbar'
import theme from './theme/theme'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />

          <Grid container>
            <Switch>
              <Route path='/' exact component={ListaInmuebles} />
            </Switch>
          </Grid>

        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
