import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/app/store";
import App from "./App";
import "./index.css";

//REDUX PERSISTENCE....

// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
