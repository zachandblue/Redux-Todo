import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import throttle from "lodash/throttle";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { loadState, saveState } from "./localstorage";

import reducer from "./reducers/index";

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
