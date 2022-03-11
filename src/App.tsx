import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";

import Routes from './routes';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import reduxLogger from 'redux-logger';

import { configureStore } from "@reduxjs/toolkit";

import setupInterceptor from './helpers/interceptor';

import createSagaMiddleware from "redux-saga";

import { rootSaga } from './reducers/index'

import { DQI18nProvider, I18nProvider} from './helpers/i18n/index'

const middleware: any = [ thunk ]

if (process.env.NODE_ENV !== "production") {
  middleware.push(reduxLogger)
}
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware);

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

const store = configureStore({
  reducer,
  middleware,
})
sagaMiddleware.run(rootSaga);



const persistor = persistStore(store);
setupInterceptor(store);

function App() {
  return (
    <DQI18nProvider>
      <I18nProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<h1>Loading</h1>}>
            <HelmetProvider>
              <ProductsContextProvider>
                <CartContextProvider>
                  <Routes />
                </CartContextProvider>
              </ProductsContextProvider>
            </HelmetProvider>
          </PersistGate>
        </Provider>
      </I18nProvider>
    </DQI18nProvider>
  );
}

export default App;
