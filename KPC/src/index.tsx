import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";
import { PersistGate } from 'redux-persist/integration/react'

const initialState = {}
const lightMuiTheme = getMuiTheme(lightBaseTheme);
const { store, persistor } = configureStore(initialState)

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider> 
);

const rootElement = document.getElementById("root");
render(<Root />, rootElement);
